/* eslint-disable react/prop-types */
import { Input, Space, Select } from "antd"

const InputDropdown = ({options, defaultValue, placeholder}) => {
  return (
    <Space.Compact className="w-full">
        <Input placeholder={placeholder} className="px-3 h-[38px]"/>

        <Select 
            defaultValue={defaultValue}
            className="h-[38px]" 
            options={options} 
            optionRender={(option) => 
                <div>
                    <p>{option.data.label}</p>
                    <p>{option.data.desc}</p>
                </div>
            }
            popupClassName=""
        />
    </Space.Compact>
  )
}

export default InputDropdown