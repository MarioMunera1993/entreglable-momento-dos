import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CardGrid } from "../components/CardGrid";

const listBonsai = [
  { id: 1, name: "Arce Japonés" },
  { id: 2, name: "Pino Negro" },
  { id: 3, name: "Ficus Retusa" },
  { id: 4, name: "Olmo Chino" },
  { id: 5, name: "Enebro"},
  { id: 6, name: "Azalea"}
];

export const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#f4f3ef]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-[#2d342d] mb-6 tracking-tight">Nuestra Colección</h1>
          <p className="text-[#5a615a] font-light max-w-md mx-auto leading-relaxed">
            Un vistazo a algunos de los ejemplares en los que hemos trabajado.
            Cada árbol cuenta una historia de tiempo y paciencia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            listBonsai.map((bonsai)=>(
              <CardGrid key={bonsai.id} name={bonsai.name}/>
            ))
          }

        </div>
      </main>
      <Footer />
    </div>
  );
};
