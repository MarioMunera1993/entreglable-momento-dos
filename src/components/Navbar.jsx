import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#fffdf9] px-[max(5%,calc((100%-1200px)/2))] py-6 shadow-sm">

        <Link to={"/"} className="text-xl font-bold tracking-wider text-slate-800 uppercase">Zenith Bonsai</Link>
        <div className="flex gap-6 text-wrap">
            <Link to={"/philosophy"} className="text-gray-700 hover:text-black transition-colors font-medium" href="">
            Filosofía
            </Link>
            <Link to={"/gallery"} className="text-gray-700 hover:text-black transition-colors font-medium">Galería</Link>
            <Link to={"/booking"} className="text-gray-700 hover:text-black transition-colors font-medium">Reservas</Link>
        </div>
    </nav>
  )
}