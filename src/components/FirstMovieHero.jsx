import { Play } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

export default function FirstMovieHero({ firstMovie, firstMovieImage, firstMovieTrailer }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* MODALE (fuori dal contenitore principale) */}
            {isOpen && (
                <div className="fixed inset-0 z-30 flex justify-center items-center">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Scheda film */}
                    <div className="relative z-50 bg-black rounded-3xl text-white 
                            w-[90vw] max-w-4xl max-h-[90vh] overflow-y-auto 
                            p-6 flex flex-col md:flex-row shadow-[2px_2px_150px] shadow-red-900 
                            border-2 border-red-900">

                        {/* Colonna immagine */}
                        <div className="shrink-0 w-full md:w-1/3 h-64 md:h-auto rounded-2xl overflow-hidden mb-4 md:mb-0">
                            <img
                                src={`https://image.tmdb.org/t/p/original${firstMovieImage}`}
                                alt="Poster del film"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Contenuto */}
                        <div className="flex flex-col flex-1 md:ml-6 justify-between">
                            <div>
                                <h2 className="text-3xl font-bold mb-2">{firstMovie.title}</h2>
                                <p className="text-gray-400 mb-4">2025 • Azione | Avventura • 2h 15m</p>
                                <p className="text-gray-300 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-4">
                                <span className="bg-red-900 text-white px-3 py-1 rounded-full text-sm">
                                    Regista: John Doe
                                </span>
                                <span className="bg-red-900 text-white px-3 py-1 rounded-full text-sm">
                                    Cast: Jane, Mark, Zoe
                                </span>
                                <span className="bg-red-900 text-white px-3 py-1 rounded-full text-sm">
                                    Lingua: Italiano
                                </span>
                            </div>

                            <Button type={"x"} onClick={() => setIsOpen(false)} />
                        </div>
                    </div>
                </div>
            )}

            <div className="relative flex items-center min-h-fit lg:h-[70vh]  flex-col lg:flex-row 2xl:h-screen w-full overflow-hidden mx-auto px-10 lg:px-56 ">
                {/* Background image */}
                <img
                    src={`https://image.tmdb.org/t/p/original${firstMovieImage}`}
                    alt={firstMovie?.title}
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-30"
                />

                <div className="absolute inset-0 top-0 left-0 w-4/5 bg-linear-to-r from-black to-transparent z-10 opacity-0 lg:opacity-100"></div>
                <div className="absolute inset-y-0 top-0 right-0 w-1/2 bg-linear-to-l from-black to-transparent z-10 opacity-0 lg:opacity-100"></div>


                <iframe
                    src={`https://www.youtube.com/embed/${firstMovieTrailer}?autoplay=1&mute=1&controls=0&loop=1&playlist=${firstMovieTrailer}`}
                    className="lg:absolute top-0 left-0 w-screen h-full object-cover object-center opacity-0 lg:opacity-100"
                    allow="autoplay; encrypted-media;"
                    allowFullScreen
                    style={{ pointerEvents: "none" }}
                />

                {/* Content */}

                <div className="relative z-20 max-w-2xl">
                    <h2 className="text-white text-4xl lg:text-7xl font-extrabold drop-shadow-lg mb-4 text-shadow-[2px_2px_40px_rgba(0,0,0,0.5)] text-shadow-white">
                        {firstMovie?.title}
                    </h2>
                    <h3 className="text-white text-md leading-relaxed drop-shadow-md">
                        {firstMovie?.overview}
                    </h3>
                    <div className="flex flex-col md:flex-row md:gap-4">
                        <Button>
                            <Play /> Guarda ora
                        </Button>
                        <Button type={"secondary"} onClick={() => setIsOpen(true)}>
                            Altre informazioni
                        </Button>
                    </div>
                </div>



            </div>


        </>
    );
}
