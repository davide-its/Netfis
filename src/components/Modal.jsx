/* 
  Modal Component
  ------------------------
  Displays a detailed modal for a movie or TV series.
  - Shows the poster image, title, tagline, genres, runtime/seasons, rating, and description.
  - Includes buttons for closing the modal, viewing more details, and adding/removing from favourites.
  - Uses React Portal to render the modal at the top level of the DOM.
  - Props:
      opera: object containing movie/series details
      operaImage: fallback image if poster is missing
      setIsOpen: function to control modal visibility
*/

import { createPortal } from "react-dom";
import Button from "./Button";
import FavouriteButton from "./FavouriteButton";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

/* Modal component */
function Modal({ opera, operaImage, setIsOpen }) {
  /* If no data is provided, return nothing */
  if (!opera) return null;

  return createPortal(
    /* Modal overlay container */
    <div className="fixed inset-0 top-12 z-50 flex justify-center items-center">
      {/* Background overlay (closes the modal when clicked) */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal content */}
      <div
        className="relative z-50 bg-black rounded-3xl text-white w-[90vw] max-w-4xl max-h-[90vh] overflow-y-auto p-6 flex flex-col md:flex-row shadow-[2px_2px_150px] shadow-red-900 border-2 border-red-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">

          <div className="shrink-0 w-full md:w-1/3 h-64 md:h-auto rounded-2xl overflow-hidden mb-4 md:mb-0">
            <img
              src={`https://image.tmdb.org/t/p/original${opera.poster_path || operaImage
                }`}
              title={opera.title || opera.original_name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col md:ml-6 w-full">

            <div className="mb-4">
              <h3 className="text-3xl font-bold mb-1">
                {opera.title || opera.original_name}
              </h3>

              {opera.tagline && (
                <p className="text-red-400 italic mb-2">“{opera.tagline}”</p>
              )}
              <ul className="flex gap-3 text-gray-400 text-xs mb-3 flex-wrap">

                <li className="list-none p-0">
                  {opera.release_date?.slice(0, 4) ||
                    opera.first_air_date?.slice(0, 4)}
                </li>

                <li>
                  {opera.genres?.map((g) => g.name).join(", ") || "N/A"}
                </li>

                <li>
                  {opera.runtime
                    ? `${opera.runtime} min`
                    : opera.number_of_seasons
                      ? `${opera.number_of_seasons} stagioni`
                      : "N/A"}
                </li>

                <li>
                  <div className="flex items-center justify-center">
                    <Star className="text-amber-300 h-4" />{" "}
                    {opera.vote_average?.toFixed(1)}
                  </div>
                </li>

              </ul>
              <p className="text-gray-300 leading-relaxed">
                {opera.overview ||
                  "Ops! Purtroppo non c'è ancora una descrizione disponibile..."}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <span className="bg-red-900 text-white px-3 py-1 rounded-full text-sm">
                Lingua originale: {opera.original_language?.toUpperCase()}
              </span>
              <Button type="x" onClick={() => setIsOpen(false)} />
            </div>

            <div className="mt-auto pt-8 gap-4 flex justify-end items-center flex-wrap mx-auto w-full">
              <Button
                className={
                  "w-full  md:w-auto  justify-center md:justify-self-auto"
                }
                type={"details"}
                operaProp={opera}
                setIsOpen={setIsOpen}
              >
                Maggiori dettagli
              </Button>
              <FavouriteButton
                className={
                  "w-full md:w-auto justify-center md:justify-self-auto"
                }
                opera={opera}
              />
            </div>
          </div>
        </div>
      </div>

    </div>,
    document.body
  );
}

export default Modal;
