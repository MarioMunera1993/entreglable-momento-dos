export const BookingForm = () => {
  return (
      <div className="flex flex-col gap-6">
        {/* Card del formulario */}
        <div className="bg-[#fffdf9] rounded-2xl border border-stone-200 p-8">
          <div className="flex flex-col gap-6">
            {/* Nombre */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-stone-700">
                Nombre completo
              </label>
              <input
                type="text"
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
                placeholder="tu@email.com"
                className="border border-stone-300 rounded-lg px-4 py-2.5 text-sm text-stone-700 placeholder:text-stone-400 outline-none focus:ring-1 focus:ring-stone-400 transition"
              />
            </div>

            {/* Nivel de experiencia */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-stone-700">
                Nivel de experiencia
              </label>
              <select className="border border-stone-300 rounded-lg px-4 py-2.5 text-sm text-stone-700 outline-none focus:ring-1 focus:ring-stone-400 transition appearance-auto">
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
                placeholder="¿Qué te gustaría aprender?"
                rows={4}
                className="border border-stone-300 rounded-lg px-4 py-2.5 text-sm text-stone-700 placeholder:text-stone-400 outline-none focus:ring-1 focus:ring-stone-400 transition resize-y"
              />
            </div>

            {/* Botón */}
            <button className="w-full bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium py-3 rounded-lg transition-colors duration-200 cursor-pointer">
              Enviar Solicitud
            </button>
          </div>
        </div>
      </div>
  );
};
