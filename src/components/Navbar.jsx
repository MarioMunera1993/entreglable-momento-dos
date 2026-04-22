import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center border-b-4 pt-[clamp(1.5rem,3vw,2.5rem)] 
  pb-[clamp(1.5rem,3vw,2.5rem)] 
  px-[max(5%,calc((100%-1200px)/2))]">

        <Link to={"/"} className="text-2xl font-semibold tracking-widest uppercase" href="">Zenith Bonsai</Link>
        <div className="flex gap-6 text-wrap">
            <Link to={"/philosophy"} className="font-normal pb-1 border-b border-transparent hover:border-b-black text-1" href="">
            Filosofía
            </Link>
            <Link to={"/gallery"} className="font-normal pb-1 border-b border-transparent hover:border-b-black text-1">Galería</Link>
            <Link to={"/booking"} className="font-normal pb-1 border-b border-transparent hover:border-b-black text-1">Reservas</Link>
        </div>
    </nav>
  )
}