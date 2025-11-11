import { Play } from "lucide-react";

export default function FirstMovieHero(firstMovie, firstMovieImage) {
    return (
        <div className="relative flex items-center h-[70vh] w-[80vw] overflow-hidden mx-auto">
            {/* Background image */}
            <img
                src={`https://image.tmdb.org/t/p/original${firstMovieImage}`}
                alt={firstMovie?.title}
                className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-1/5 bg-linear-to-l from-black to-transparent z-10"></div>
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black to-transparent z-20"></div>
            {/* Content */}

            <div className="relative z-20 pl-16 max-w-2xl">
                <h2 className="text-white text-6xl font-extrabold drop-shadow-lg mb-4">
                    {firstMovie?.title}
                </h2>
                <h3 className="text-white text-md leading-relaxed drop-shadow-md">
                    {firstMovie?.overview}
                </h3>
                <a className="flex cursor-pointer text-white font-bold my-10 bg-red-800 py-3 px-5 rounded-2xl w-fit gap-3">
                    <Play strokeWidth={3} />
                    Guarda ora
                </a>
            </div>

        </div>
    )
}