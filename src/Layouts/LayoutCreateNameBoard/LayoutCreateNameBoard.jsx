/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import InputReset from "../../Components/Inputs/InputReset"

const LayoutCreateNameBoard = ({ handleStep }) => {
  return (
    <div>
      <div className="text_title">
        <h1 className="text-2xl mb-5">Let's start working together</h1>
        <p className="text-sm mb-3">Give your board a name, e.g. marketing plan, sales pipeline, quarterly roadmap..</p>
        <InputReset placeholder={"Your first project"} />

        <div className="bg-slate-100 p-5 rounded-md text-[15px]">
          <p>In monday.com, "boards" are the place where all your content lives.</p>
        </div>
    
      </div>
        {/* <button onClick={() => {
            handleStep(1)
        }}>Next</button>     */}
    </div>
  )
}

export default LayoutCreateNameBoard