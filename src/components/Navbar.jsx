import { NavLink } from "react-router-dom"

const navLinkClass = ({ isActive }) =>
  `text-sm transition-colors duration-200 font-normal pb-0.5 ${
    isActive
      ? "text-[#2d342d] border-b border-[#2d342d]"
      : "text-[#5a615a] hover:text-[#2d342d]"
  }`

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#f4f3ef] border-b border-[#dddbd3] px-[max(5%,calc((100%-1200px)/2))] py-5">

        <NavLink to={"/"} end className="text-sm font-bold tracking-widest text-[#2d342d] uppercase">Zenith Bonsai</NavLink>
        <div className="flex gap-8">
            <NavLink to={"/philosophy"} className={navLinkClass}>
            Filosofía
            </NavLink>
            <NavLink to={"/gallery"} className={navLinkClass}>Galería</NavLink>
            <NavLink to={"/booking"} className={navLinkClass}>Reservas</NavLink>
        </div>
    </nav>
  )
}