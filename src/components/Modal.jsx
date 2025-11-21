import { Heart, Star } from "lucide-react";
import Button from "./Button";

function Modal({ opera, operaImage, setIsOpen }) {

    console.log(opera);
    return (
        <div className="fixed inset-0 z-30 flex justify-center items-center">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            />

            {/* Scheda */}
            <div className="relative z-50 bg-black rounded-3xl text-white 
                                w-[90vw] max-w-4xl max-h-[90vh] overflow-y-auto 
                                p-6 flex flex-col md:flex-row shadow-[2px_2px_150px] shadow-red-900 
                                border-2 border-red-900">

                {/* Poster */}
                <div className="shrink-0 w-full md:w-1/3 h-64 md:h-auto rounded-2xl overflow-hidden mb-4 md:mb-0">
                    <img
                        src={`https://image.tmdb.org/t/p/original${operaImage}`}
                        title={opera.title || opera.original_name}
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* Contenuti */}

                <div className="flex flex-col md:ml-6 w-full">

                    {/* Titolo + Tagline */}
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold mb-1">{opera.title || opera.original_name}</h2>

                        {opera.tagline && (
                            <p className="text-red-400 italic mb-2">“{opera.tagline}”</p>
                        )}

                        {/* Info principali */}
                        <p className="text-gray-400 text-sm mb-3 flex flex-wrap gap-2">
                            <span>{opera.release_date?.slice(0, 4) || opera.last_air_date?.slice(0, 4)}</span>
                            <span>•</span>
                            <span>
                                {opera.genres?.map(g => g.name).join(", ") || "N/A"}
                            </span>
                            <span>•</span>
                            <span>{opera.runtime ? opera.runtime + "min" : opera.number_of_seasons ? opera.number_of_seasons + " stagioni" : "N/A"} </span>
                            <span>•</span>
                            <span className="flex items-center"><Star className="text-amber-300 h-4" /> {opera.vote_average?.toFixed(1)}</span>
                        </p>

                        {/* Overview */}
                        <p className="text-gray-300 leading-relaxed">
                            {opera.overview || "Ops! Purtroppo non c'è ancora una descrizione disponibile..."}
                        </p>
                    </div>

                    {/* Info aggiuntive */}
                    <div className="flex flex-wrap gap-3 mt-2">

                        {/* Lingua originale */}
                        <span className="bg-red-900 text-white px-3 py-1 rounded-full text-sm">
                            Lingua originale: {opera.original_language?.toUpperCase()}
                        </span>


                        <Button type="x" onClick={() => setIsOpen(false)} />

                    </div>

                    <div className="mt-auto ms-auto">
                        <Button type={""}><Heart /> Aggiungi ai preferiti</Button>
                    </div>
                </div>




            </div>

        </div>
    )
}
export default Modal;