
import ButtonCustom from "../../Components/Buttons/ButtonCustom";
import ButtonGoogle from "../../Components/Buttons/ButtonGoogle";
import InputCustom from "../../Components/Inputs/InputCustom";
import welcomeImage  from "./../../assets/imgs/welcometomonday.jpeg";
export const SignUpNew = () => {
  return (
    <div className='h-screen flex'>
        <div className='content_signup w-8/12'>
            <h1>Welcome to monday.com</h1>
            <p>Get started. It is free</p>
            <ButtonGoogle />
            <div>
                <div className="line_cross"></div>
                <span>Or</span>
                <div className="line_cross"></div>
            </div>
            <InputCustom placeholder={"name@company.com"}/>
            <ButtonCustom content={"Continue"} onClick={() => {alert("Custom")}}/>
            <p>By proceeding, you agree to the <br /> 
            <a href="#" > Term of services </a>
            and
            <a href="#" > Privacy Policy </a>
            </p>
            <p>Already had an account
            <a href="#" > Login</a>
            </p>
        </div>
        <div className='image_signup w-4/12 bg-pink-500'>
            <img src={welcomeImage} alt="welcome-monday" />
        </div>
    </div>
  )
}
