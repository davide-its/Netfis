/* Loader Component */

export default function Loader() {
  return (
    <div className="w-full h-[70vh] flex items-center justify-center">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-red-600 border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}
