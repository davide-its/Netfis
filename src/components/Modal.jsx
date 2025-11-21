import Button from "./Button";

function Modal({opera, operaImage, setIsOpen}) {


    return (
        <div className="fixed inset-0 top-15 z-30 flex justify-center items-center">

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
                        alt={opera.title}
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* Contenuti */}
                <div className="flex flex-col flex-1 md:ml-6">

                    {/* Titolo + Tagline */}
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold mb-1">{opera.title}</h2>

                        {opera.tagline && (
                            <p className="text-red-400 italic mb-2">“{opera.tagline}”</p>
                        )}

                        {/* Info principali */}
                        <p className="text-gray-400 text-sm mb-3 flex flex-wrap gap-2">
                            <span>{opera.release_date?.slice(0, 4)}</span>
                            <span>•</span>
                            <span>
                                {opera.genres?.map(g => g.name).join(", ")}
                            </span>
                            <span>•</span>
                            <span>{opera.runtime} min</span>
                            <span>•</span>
                            <span>⭐ {opera.vote_average?.toFixed(1)}</span>
                        </p>

                        {/* Overview */}
                        <p className="text-gray-300 leading-relaxed">
                            {opera.overview}
                        </p>
                    </div>

                    {/* Info aggiuntive */}
                    <div className="flex flex-wrap gap-3 mt-2">

                        {/* Regista */}
                        {opera.crew && (
                            <span className="bg-red-900 text-white px-3 py-1 rounded-full text-sm">
                                Regista: {
                                    opera.crew.find(c => c.job === "Director")?.name
                                    || "N/D"
                                }
                            </span>
                        )}

                        {/* Cast */}
                        {opera.cast && (
                            <span className="bg-red-900 text-white px-3 py-1 rounded-full text-sm">
                                Cast: {
                                    opera.cast
                                        .slice(0, 3)
                                        .map(a => a.name)
                                        .join(", ")
                                }
                            </span>
                        )}

                        {/* Lingua originale */}
                        <span className="bg-red-900 text-white px-3 py-1 rounded-full text-sm">
                            Lingua originale: {opera.original_language?.toUpperCase()}
                        </span>


                    </div>

                    <div className="mt-6">
                        <Button type="x" onClick={() => setIsOpen(false)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;