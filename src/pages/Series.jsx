import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Layout from "../Layouts/Layout";
import Card from "../components/Card";
import { useMedia } from "../context/MediaContext";
import Loader from "../components/Loader";

export default function Series() {
  const { series, genres = {}, loading } = useMedia();

  if (loading) return <Loader />;

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
      <div className="container mx-auto">
        <section className="h-full md:px-12 md:pt-12">
          <h2 className="text-5xl font-extrabold py-4">
            Serie popolari per categoria
          </h2>
          <h3 className="mb-8">
            Romantiche, divertenti, drammatiche, horror e tanto altro: solo le
            serie sanno suscitare così tante emozioni.
          </h3>
          {sortedGenreEntries.map(([genreName, shows]) => (
            <div className="py-4" key={genreName}>
              <h3 className="font-semibold text-2xl pb-2">{genreName}</h3>
              {/* MOBILE */}
              <div className="flex md:hidden gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={14}
                  slidesPerView={Math.min(shows.length, 1.5)}
                >
                  {shows.map((serie) => (
                    <SwiperSlide key={serie.id}>
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
              {/* DESKTOP */}
              <div className="hidden md:block">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={Math.min(shows.length, 4.5)}
                  navigation
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
    </Layout>
  );
}
