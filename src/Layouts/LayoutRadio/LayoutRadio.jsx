import Radio from "antd/es/radio/radio"

// eslint-disable-next-line react/prop-types
const LayoutRadio = ({onChange, value}) => {
  const items = [
    {value: "Work", content: "Work"},
    {value: "Personal", content: "Personal"},
    {value: "School", content: "School"},
    {value: "Non-profit", content: "Non-profit"},
  ];
  return (
    <div className="radio_style"> 
      <h2 className="text-2xl mb-5">What brings you here today</h2>
      <Radio.Group onChange={onChange} value={value}>
        {items.map((val, key) => <Radio key={key} value={val.value}>{val.content}</Radio>)}
      </Radio.Group>
  </div>
  )
}

export default LayoutRadio;