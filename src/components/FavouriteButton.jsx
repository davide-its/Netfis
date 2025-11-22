import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useFavourites } from "../context/FavouritesContext";

export default function FavouriteButton({ opera }) {
  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const [isFavourite, setIsFavourite] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setIsFavourite(favourites.some((fav) => fav.id === opera.id));
  }, [favourites, opera.id]);

  const toggleFavourite = () => {
    if (isFavourite) {
      removeFavourite(opera.id);
    } else {
      addFavourite(opera);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300);
    }
  };

  return (
    <button
      onClick={toggleFavourite}
      className={`flex items-center gap-2 transition-transform duration-300 cursor-pointer ${isFavourite ? "bg-white text-black" : "bg-red-700"} p-3 rounded-full ${
        animate ? "scale-125" : "scale-100"
      }`}
    >
      <Heart
        className={`transition-colors duration-300 ${
          isFavourite ? "text-red-500" : "text-white"
        }`}
      />
      {isFavourite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
    </button>
  );
}
