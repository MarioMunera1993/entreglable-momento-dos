export const CardGrid = ({ name }) => {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 flex flex-col items-center justify-end p-20 hover:shadow-md transition-shadow duration-300 cursor-pointer">
      <span className="text-stone-500 text-sm font-light tracking-wide">{ name }</span>
    </div>
  )
}
