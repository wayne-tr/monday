/* eslint-disable react/prop-types */
import Radio from "antd/es/radio/radio"

const LayoutRadio = ({ value, items, title, onChange}) => {
  return (
    <div className="radio_style"> 
      <h2 className="text-2xl mb-5">{title}</h2>
      <Radio.Group onChange={onChange} value={value}>
        {items.map((val, key) => <Radio key={key} value={val.value}>{val.content}</Radio>)}
      </Radio.Group>
  </div>
  )
}

export default LayoutRadio;