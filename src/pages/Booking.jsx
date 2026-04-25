import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BookingForm } from "../components/BookingForm"

export const Booking = () => {
  return (
    <div className="min-h-screen bg-[#f4f3ef]">
      <Navbar />
      <main className="max-w-xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-light text-[#2d342d] mb-3 tracking-tight">Reserva un Taller</h1>
        <p className="text-[#5a615a] font-light mb-10 leading-relaxed">Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.</p>
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}