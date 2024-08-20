import imgRegister from "./../../assets/imgs/setup-account.avif";
import imgLogoMini from "./../../assets/imgs/logo-mini-monday.avif";
import InputCustom from "../../Components/Inputs/InputCustom";
import ButtonCustom from "../../Components/Buttons/ButtonCustom";
const GetInfoRegister = () => {
  return (
    <div className="h-screen flex">
        <div className="info_register_content w-7/12 px-32 py-16">
            <div className="flex-1">
                <img className='h-6' src={imgLogoMini} />
            </div>
            <div>
                <h1>Create your account</h1>
                <InputCustom placeholder={"Enter your full name"}/>
                <InputCustom placeholder={"Enter at least 8 characters"}/>
                <InputCustom placeholder={"For example, company's or department's name"}/>
            </div>
            <div className="action_redirect">
                <ButtonCustom content={"Continue"} onClick={() => {alert("Custom")}}/>
            </div>
        </div>
        <div className="info_register_img w-5/12">
            <img className="h-full w-full" src={imgRegister} />
        </div>
    </div>
  )
}

export default GetInfoRegister