import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Layout from "../Layouts/Layout";
import Card from "../components/Card";
import { useMedia } from "../context/MediaContext";
import Loader from "../components/Loader";

export default function Movies() {
  const { movies, genres = {}, loading } = useMedia();

  if (loading) return <Loader />;

  const genreIdToName = genres;

  function groupMoviesByGenre(moviesList) {
    const groups = {};

    moviesList.forEach((movie) => {
      const ids = movie.genre_ids ?? [];

      if (ids.length === 0) {
        const name = "Senza categoria";
        groups[name] = groups[name] ?? [];
        groups[name].push(movie);
        return;
      }

      ids.forEach((id) => {
        const genreName = genreIdToName[id] || "Senza categoria";
        groups[genreName] = groups[genreName] ?? [];
        if (!groups[genreName].some((m) => m.id === movie.id)) {
          groups[genreName].push(movie);
        }
      });
    });

    return groups;
  }

  const moviesByGenre = groupMoviesByGenre(movies || []);

  const sortedGenreEntries = Object.entries(moviesByGenre)
    .filter(([genreName]) => genreName !== "Senza categoria")
    .sort((a, b) => b[1].length - a[1].length);

  return (
    <Layout>
      <div className="container mx-auto">
        <section className="h-full md:px-12 md:pt-12">
          <h2 className="text-5xl font-extrabold py-4">
            Film popolari per categoria
          </h2>
          <h3 className="mb-8">
            Romantici, divertenti, drammatici, horror e tanto altro: solo i film
            sanno suscitare così tante emozioni. Un'ampia scelta di titoli per
            avventure infinite.
          </h3>
          {sortedGenreEntries.map(([genreName, films]) => (
            <div className="py-4" key={genreName}>
              <h3 className="font-semibold text-2xl pb-2">{genreName}</h3>
              {/* MOBILE */}
              <div className="flex md:hidden gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={14}
                  slidesPerView={Math.min(films.length, 1.5)}
                >
                  {films.map((movie) => (
                    <SwiperSlide key={movie.id}>
                      <Card
                        id={movie.id}
                        type="movie"
                        name={movie.title}
                        image={movie.poster_path}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* DESKTOP */}
              <div className="hidden md:block">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={Math.min(films.length, 4.5)}
                  navigation
                >
                  {films.map((movie) => (
                    <SwiperSlide key={`${genreName}-${movie.id}`}>
                      <Card
                        id={movie.id}
                        type={"movie"}
                        name={movie.title}
                        image={movie.poster_path}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}
