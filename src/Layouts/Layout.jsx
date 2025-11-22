import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="py-6 bg-[#181818] text-white">{children}</div>
      <Footer />
    </>
  );
}
