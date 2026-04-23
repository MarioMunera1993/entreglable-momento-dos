import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BookingForm } from "../components/BookingForm"

export const Booking = () => {
  return (
    <div className="min-h-screen bg-[#f7f6f2]">
      <Navbar />
      <main className="max-w-2xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-light text-stone-700 mb-4 tracking-tight">Reserva un Taller</h1>
        <p className="text-stone-500 font-light mb-10">Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.</p>
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}