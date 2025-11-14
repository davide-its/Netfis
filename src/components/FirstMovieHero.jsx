import { Play } from "lucide-react";
import Button from "./Button";

export default function FirstMovieHero({ firstMovie, firstMovieImage, firstMovieTrailer }) {
    return (
        <div className="relative flex items-center h-[70vh] w-full overflow-hidden mx-auto px-10 lg:px-56">
            {/* Background image */}
            {/* <img
                src={`https://image.tmdb.org/t/p/original${firstMovieImage}`}
                alt={firstMovie?.title}
                className="absolute inset-0 w-full h-full object-cover object-top"
            /> */}

            <iframe
                src={`https://www.youtube.com/embed/${firstMovieTrailer}?autoplay=1&mute=1&controls=0&loop=1&playlist=${firstMovieTrailer}`}
                className="absolute inset-0 w-full h-full object-cover object-top"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                style={{ pointerEvents: "none" }}
            />
            {/* Gradient laterali */}
            <div className="absolute inset-y-0 left-125 w-1/4 bg-gradient-to-r from-black to-transparent z-10 "></div>
            <div className="absolute inset-y-0 right-125 w-1/10 bg-gradient-to-l from-black to-transparent z-10"></div>

            {/* Gradient in basso */}
            <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-black to-transparent z-20"></div>
            {/* Content */}

      <div className="relative z-20 max-w-2xl">
        <h2 className="text-white text-4xl lg:text-7xl font-extrabold drop-shadow-lg mb-4 text-shadow-[2px_2px_40px_rgba(0,0,0,0.5)] text-shadow-white">
          {firstMovie?.title}
        </h2>
        <h3 className="text-white text-md leading-relaxed drop-shadow-md">
          {firstMovie?.overview}
        </h3>
        <Button>
          {" "}
          <Play /> Guarda ora{" "}
        </Button>
      </div>
    </div>
  );
}
