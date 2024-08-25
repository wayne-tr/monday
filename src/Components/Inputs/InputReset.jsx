/* eslint-disable react/prop-types */
const InputReset = ({ placeholder }) => {
  return (
    <div className="px-5 py-2 border border-gray-300 rounded relative hover:border-black duration-500 mb-10">
      <input className="focus:outline-none text-sm" type="text" placeholder={placeholder}/>
      <button className="absolute right-2 bottom-1/2 translate-y-1/2 h-3/4 w-7 rounded hover:bg-slate-200">X</button>
    </div>
  )
}

export default InputReset