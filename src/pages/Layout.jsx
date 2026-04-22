import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const Layout = () => {
  return (
    <div>
        <Navbar/>
        <main>
            <h1>El arte de la paciencia</h1>
            <p>Descubre la serenidad a través del cuidado y diseño de árboles Bonsái. Un espacio para reconectar con la naturaleza.</p>
            <a href="">Reserva un taller</a>
        </main>
        <Footer/>
    </div>
  )
}