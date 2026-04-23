import { Link } from "react-router-dom"

export const HeroSection = () => {
  return (
    <main className="flex flex-1 flex-col justify-center px-[max(5%,calc((100%-1200px)/2))] py-20">
      <h1 className="max-w-2xl text-6xl font-light tracking-tight text-[#2d342d] md:text-7xl">
        El arte de la <br />
        <span className="font-normal">paciencia</span>
      </h1>
      <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#5a615a]">
        Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
        Un espacio para reconectar con la naturaleza.
      </p>
      <div className="mt-10">
        <Link
          to="/booking"
          className="inline-block rounded-sm bg-[#2d362d] px-8 py-4 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-95 hover:bg-[#4d574d]"
        >
          Reserva un taller
        </Link>
      </div>
    </main>
  );
};
