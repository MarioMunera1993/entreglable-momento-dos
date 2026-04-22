import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Philosophy = () => {
  return (
    <div className="min-h-screen bg-[#f7f6f2] flex flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col justify-center px-[max(5%,calc((100%-1200px)/2))] py-20">
        <div className="max-w-2xl">
          <h1 className="font-outfit text-5xl md:text-6xl font-light tracking-tight text-[#2d342d] leading-tight">
            Menos es más
          </h1>
          <div className="mt-16 space-y-10">
            <p className="font-outfit text-xl leading-relaxed text-[#5a615a] font-light">
              Nuestra filosofía se centra en la observación y el respeto por los
              ritmos naturales. Creemos que cultivar un Bonsái no es solo
              jardinería, sino una meditación activa.
            </p>
            <p className="font-outfit text-xl leading-relaxed text-[#5a615a] font-light">
              En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo
              que cada corte y cada alambrado debe tener un propósito. Buscamos
              el equilibrio perfecto entre la intervención humana y la expresión
              salvaje de la naturaleza.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
