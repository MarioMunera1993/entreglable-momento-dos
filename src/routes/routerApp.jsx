import { Route, Routes } from "react-router-dom"
import { Layout } from "../pages/Layout"
import { Philosophy } from "../pages/Philosophy"
import { Gallery } from "../pages/Gallery"
import { Booking } from "../pages/Booking"

export const RouterApp = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/philosophy" element={<Philosophy/>} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/booking" element={<Booking/>} />
    </Routes>
  )
}
