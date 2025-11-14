import { Search, User } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="h-14 bg-black/70 backdrop-blur-xs fixed top-0 w-full z-100">
            <div className="container h-full flex items-center justify-center mx-auto">
                <div className="h-32 flex items-center justify-center overflow-hidden">
                    <img src="src/assets/netfis_nobg.png" alt="Netfis logo" className="h-28 w-full object-contain" />
                </div>
                <div className="me-auto ps-10">
                    <ul className="list-none flex flex-row gap-10 text-white">
                        <li><a href="">Film</a></li>
                        <li><a href="">Serie Tv</a></li>
                        <li><a href="">Preferiti</a></li>
                    </ul>
                </div>
                <div className="ms-auto">
                    <ul className="list-none flex flex-row gap-10 text-white">
                        <li><a className="flex flex-row gap-3 text-white" href=""><Search /> Cerca</a></li>
                        <li><a className="flex flex-row gap-3 text-white" href=""><User /></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}