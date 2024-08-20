/* eslint-disable react/prop-types */
const InputCustom = ({placeholder, onChange, onBlur, value}) => {
  return (
    <div>
      <input
        onChange={onChange}
        onBlur={onBlur}
        type="text" 
        placeholder={placeholder}
        value={value}
        className="py-2 px-4 rounded border border-gray-400 hover:border-black focus:border-black focus-visible:outline-none w-full"
      />
    </div>
  )
}

export default InputCustom