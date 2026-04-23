import { useState } from "react"

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    nivel: "Principiante (Nunca he tenido un Bonsái)",
    mensaje: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("solicitud_taller", JSON.stringify(formData))
    console.log("Formulario enviado:", formData)
    alert(`¡Gracias ${formData.nombre}! Tu solicitud fue enviada.`)
    setFormData({
      nombre: "",
      correo: "",
      nivel: "Principiante (Nunca he tenido un Bonsái)",
      mensaje: "",
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#fffdf9] rounded-2xl border border-stone-200 p-8">
        <div className="flex flex-col gap-6">

          {/* Nombre */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-stone-700">
              Nombre completo
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej. Ana Silva"
              className="border border-stone-300 rounded-lg px-4 py-2.5 text-sm text-stone-700 placeholder:text-stone-400 outline-none focus:ring-1 focus:ring-stone-400 transition"
            />
          </div>

          {/* Correo */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-stone-700">
              Correo electrónico
            </label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="border border-stone-300 rounded-lg px-4 py-2.5 text-sm text-stone-700 placeholder:text-stone-400 outline-none focus:ring-1 focus:ring-stone-400 transition"
            />
          </div>

          {/* Nivel de experiencia */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-stone-700">
              Nivel de experiencia
            </label>
            <select
              name="nivel"
              value={formData.nivel}
              onChange={handleChange}
              className="border border-stone-300 rounded-lg px-4 py-2.5 text-sm text-stone-700 outline-none focus:ring-1 focus:ring-stone-400 transition appearance-auto"
            >
              <option>Principiante (Nunca he tenido un Bonsái)</option>
              <option>Intermedio (Tengo algunos árboles)</option>
              <option>Avanzado (Busco Perfeccionar Técnicas)</option>
            </select>
          </div>

          {/* Mensaje */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-stone-700">
              Mensaje{" "}
              <span className="font-light text-stone-400">(Opcional)</span>
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="¿Qué te gustaría aprender?"
              rows={4}
              className="border border-stone-300 rounded-lg px-4 py-2.5 text-sm text-stone-700 placeholder:text-stone-400 outline-none focus:ring-1 focus:ring-stone-400 transition resize-y"
            />
          </div>

          {/* Botón */}
          <button
            onClick={handleSubmit}
            className="w-full bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium py-3 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Enviar Solicitud
          </button>

        </div>
      </div>
    </div>
  )
}
