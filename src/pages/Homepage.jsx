
import { useState, useEffect } from "react";
import FirstMovieHero from "../components/FirstMovieHero";
import Card from "../components/Card";
import Layout from "../Layouts/Layout";

export default function Homepage() {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [firstMovie, setFirstMovie] = useState(null);
    const [firstMovieImage, setFirstMovieImage] = useState(null);
    const [trailer, setTrailer] = useState("");

    const API_URL = import.meta.env.VITE_API_BASE_URL;
    const TOKEN = import.meta.env.VITE_APP_BEARER_TOKEN;

    const fetchData = async () => {
        try {
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${TOKEN}`,
                },
            };

            // --- 1) POPOLARITÀ FILM ---
            const movieRes = await fetch(`${API_URL}/movie/popular?language=it-IT`, options);
            const movieData = await movieRes.json();

            const movieList = movieData.results || [];
            setMovies(movieList);

            if (!movieList.length) return;

            const randomIndex = Math.floor(Math.random() * movieList.length);
            const selectedMovie = movieList[randomIndex];

            // --- 2) DETTAGLI FILM COMPLETI ---
            const detailRes = await fetch(`${API_URL}/movie/${selectedMovie.id}?language=it-IT`, options);
            const detailData = await detailRes.json();

            // Salvo i dettagli completi nel tuo state
            setFirstMovie(detailData);
            console.log(detailData);

            // --- 3) IMMAGINI ---
            const imgRes = await fetch(`${API_URL}/movie/${selectedMovie.id}/images`, options);
            const imgData = await imgRes.json();

            const backdrop = imgData.backdrops?.find(i => i.height >= 1500);
            setFirstMovieImage(backdrop?.file_path || null);

            // --- 4) VIDEOS / TRAILER ---
            const vidRes = await fetch(`${API_URL}/movie/${selectedMovie.id}/videos`, options);
            const vidData = await vidRes.json();

            const trailerRaw =
                vidData.results.find(v => v.type === "Trailer" && v.site === "YouTube") ||
                vidData.results.find(v => v.site === "YouTube");

            setTrailer(trailerRaw?.key || "");

            // --- 5) SERIE POPOLARI ---
            const seriesRes = await fetch(`${API_URL}/tv/popular?language=it-IT`, options);
            const seriesData = await seriesRes.json();
            setSeries(seriesData.results || []);

        } catch (error) {
            console.error("Errore nel fetch dei dati TMDB:", error);
        }
    };

    useEffect(() => {

        fetchData();

    }, []);


    return (

        <Layout>
            <div className="h-full w-full">
                <FirstMovieHero firstMovie={firstMovie} firstMovieImage={firstMovieImage} firstMovieTrailer={trailer} />
            </div>

            <div className="container px-3 mx-auto">
                <section>
                    <h3 className="text-3xl font-bold mb-4 text-white">Migliori film <span className="text-red-500 font-bold"> trending</span></h3>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        {movies.map((movie) => (
                            <Card key={movie.id} id={movie.id} name={movie.name} image={movie.poster_path} opera={movie} />
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-3xl font-bold mb-4 text-white">Migliori Serie TV <span className="text-red-500 font-bold"> trending</span></h3>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        {series.map((tv) => (
                            <Card key={tv.id} id={tv.id} name={tv.name} image={tv.poster_path} opera={tv} />
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
}
