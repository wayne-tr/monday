/* eslint-disable no-unused-vars */
import imgLogoMini from "./../../assets/imgs/logo-mini-monday.avif";
import { useState } from "react"
import LayoutCreateNameBoard from "../../Layouts/LayoutCreateNameBoard/LayoutCreateNameBoard";
import LayoutCreateColumnBoard from "../../Layouts/LayoutCreateColumnBoard/LayoutCreateColumnBoard";

const CreateBoardTemplate = () => {
    const [step, setStep] = useState(0)
    const handleStep = (delta) => {
        setStep(step + delta);
    };
    const renderCreateBoard = () => {
        switch (step) {
            case 0:
                return <LayoutCreateNameBoard handleStep={handleStep} />
            case 1:
                return <LayoutCreateColumnBoard handleStep={handleStep}/>
            default:
                break;
        }
    }
  return (
    <div className="h-screen flex">
        <div className="w-1/2 py-16 px-32">
            <div className="create_board_logo">
                <img className='h-6' src={imgLogoMini} alt="" />
            </div>
            {renderCreateBoard()}
            <div className="mt-20 flex justify-between w-full">
                {step !== 0 ? <button className="py-2 px-4 rounded border border-gray-300" onClick={() => handleStep(-1)} >Back</button> : <div></div>}
                <button 
                    className="py-2 px-4 text-white bg-blue-400"
                    onClick={() => handleStep(1)}
                >
                    Next <i className="fa-solid fa-angle-right" />
                </button>
            </div>
        </div>
        <div className="w-1/2 bg-orange-500"></div>
    </div>
  )
}

export default CreateBoardTemplate