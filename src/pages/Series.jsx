import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Layout from "../Layouts/Layout";
import Card from "../components/Card";
import { useMedia } from "../context/MediaContext";

export default function Series() {
  const { series, genres = {}, loading } = useMedia();

  if (loading) return <p className="text-white">Caricamento...</p>;

  const genreIdToName = genres;

  function groupSeriesByGenre(seriesList) {
    const groups = {};

    seriesList.forEach((serie) => {
      const ids = serie.genre_ids ?? [];

      if (ids.length === 0) {
        const name = "Senza categoria";
        groups[name] = groups[name] ?? [];
        groups[name].push(serie);
        return;
      }

      ids.forEach((id) => {
        const genreName = genreIdToName[id] || "Senza categoria";
        groups[genreName] = groups[genreName] ?? [];
        if (!groups[genreName].some((s) => s.id === serie.id)) {
          groups[genreName].push(serie);
        }
      });
    });

    return groups;
  }

  const seriesByGenre = groupSeriesByGenre(series || []);

  const sortedGenreEntries = Object.entries(seriesByGenre)
    .filter(([genreName]) => genreName !== "Senza categoria")
    .sort((a, b) => b[1].length - a[1].length);

  return (
    <Layout>
      <div className="bg-[#181818]">
        <div className="container mx-auto">
          <section className="h-full md:px-12 md:pt-12">
            <h2 className="text-5xl font-extrabold py-4">
              Serie popolari per categoria
            </h2>
            <h3>
              Romantiche, divertenti, drammatiche, horror e tanto altro: solo le
              serie sanno suscitare così tante emozioni.
            </h3>
            {sortedGenreEntries.map(([genreName, shows]) => (
              <div key={genreName} className="py-12">
                <h3 className="font-semibold text-2xl">{genreName}</h3>
                {/* MOBILE */}
                <div className="flex md:hidden py-4 gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                  {shows.map((serie) => (
                    <div
                      key={`${genreName}-${serie.id}`}
                      className="min-w-40 snap-start"
                    >
                      <Card
                        id={serie.id}
                        type="serie" // <-- tipo corretto
                        name={serie.name || serie.original_name}
                        image={serie.poster_path}
                      />
                    </div>
                  ))}
                </div>
                {/* DESKTOP */}
                <div className="hidden md:block py-4">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    loop
                  >
                    {shows.map((serie) => (
                      <SwiperSlide key={`${genreName}-${serie.id}`}>
                        <Card
                          id={serie.id}
                          type="serie"
                          name={serie.name || serie.original_name}
                          image={serie.poster_path}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
}
