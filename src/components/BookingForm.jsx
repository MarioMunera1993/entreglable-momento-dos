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
      <div className="bg-[#fffdf9] rounded-sm border border-[#e2dfd5] p-6 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col gap-6">

          {/* Nombre */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#45543c]">
              Nombre completo
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej. Ana Silva"
              className="border border-[#e2dfd5] rounded-sm px-3 py-3 text-sm text-[#2d342d] bg-transparent placeholder:text-[#a8afa2] outline-none focus:border-[#5d7052] transition-colors duration-200"
            />
          </div>

          {/* Correo */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#45543c]">
              Correo electrónico
            </label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="border border-[#e2dfd5] rounded-sm px-3 py-3 text-sm text-[#2d342d] bg-transparent placeholder:text-[#a8afa2] outline-none focus:border-[#5d7052] transition-colors duration-200"
            />
          </div>

          {/* Nivel de experiencia */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#45543c]">
              Nivel de experiencia
            </label>
            <select
              name="nivel"
              value={formData.nivel}
              onChange={handleChange}
              className="border border-[#e2dfd5] rounded-sm px-3 py-3 text-sm text-[#2d342d] bg-transparent outline-none focus:border-[#5d7052] transition-colors duration-200 appearance-auto"
            >
              <option>Principiante (Nunca he tenido un Bonsái)</option>
              <option>Intermedio (Tengo algunos árboles)</option>
              <option>Avanzado (Busco Perfeccionar Técnicas)</option>
            </select>
          </div>

          {/* Mensaje */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#45543c]">
              Mensaje{" "}
              <span className="font-light text-[#a8afa2]">(Opcional)</span>
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="¿Qué te gustaría aprender?"
              rows={4}
              className="border border-[#e2dfd5] rounded-sm px-3 py-3 text-sm text-[#2d342d] bg-transparent placeholder:text-[#a8afa2] outline-none focus:border-[#5d7052] transition-colors duration-200 resize-y"
            />
          </div>

          {/* Botón */}
          <button
            onClick={handleSubmit}
            className="w-full bg-[#2c3627] hover:bg-[#45543c] text-[#f7f6f2] text-sm font-medium py-4 rounded-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            Enviar Solicitud
          </button>

        </div>
      </div>
    </div>
  )
}
