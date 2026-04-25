export const CardGrid = ({ name }) => {
  return (
    <div className="bg-[#ebebea] rounded-sm border border-[#dddbd3] flex flex-col items-center justify-center aspect-square hover:shadow-md transition-shadow duration-300 cursor-pointer">
      <span className="text-[#5a615a] text-sm font-light tracking-wide">{ name }</span>
    </div>
  )
}
