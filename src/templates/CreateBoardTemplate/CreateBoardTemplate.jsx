/* eslint-disable no-unused-vars */
import imgLogoMini from "./../../assets/imgs/logo-mini-monday.avif";
import { useState } from "react"
import LayoutCreateNameBoard from "../../Layouts/LayoutCreateNameBoard/LayoutCreateNameBoard";
import LayoutCreateColumn from "../../Layouts/LayoutCreateColumn/LayoutCreateColumn";

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
                return <LayoutCreateColumn />
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
        </div>
        <div className="w-1/2 bg-orange-500"></div>
    </div>
  )
}

export default CreateBoardTemplate