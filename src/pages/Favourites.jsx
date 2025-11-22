import { Link } from "react-router";
import Layout from "../Layouts/Layout";
import Card from "../components/Card";
import { useFavourites } from "../context/FavouritesContext";

export default function Favourites() {
  const { favourites } = useFavourites();

  if (favourites.length === 0)
    return (
      <Layout>
        <section className="text-white text-center py-20">
          Nessun film o serie tra i preferiti. Vai nella pagina dei
          <Link to={"/movies"} className="text-red-600 font-bold">
            {" "}
            Film{" "}
          </Link>
          o delle
          <Link to={"/series"} className="text-red-600 font-bold">
            {" "}
            Serie{" "}
          </Link>
          e aggiungi i tuoi preferiti!
        </section>
      </Layout>
    );

  return (
    <Layout>
      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-white mb-6">I tuoi preferiti</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {favourites.map((item) => {
            return (
              <Card
                key={`${item.type}-${item.id}`}
                id={item.id}
                name={item.name || item.title}
                type={item.seasons ? "serie" : "movie"}
                image={item.poster_path}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
