
import ButtonCustom from "../../Components/Buttons/ButtonCustom";
import ButtonGoogle from "../../Components/Buttons/ButtonGoogle";
import InputCustom from "../../Components/Inputs/InputCustom";
import welcomeImage  from "./../../assets/imgs/signup.avif";
export const SignUpNew = () => {
  return (
    <div className='h-screen flex'>
        <div className='content_signup w-8/12 px-32 py-16'>
            <h1>Welcome to monday.com</h1>
            <p>Get started. It is free</p>
            <ButtonGoogle />
            <div>
                <div className="line_cross"></div>
                <span>Or</span>
                <div className="line_cross"></div>
            </div>
            <InputCustom placeholder={"name@company.com"}/>
            <ButtonCustom content={"Continue"} onClick={() => {alert("Continue")}}/>
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
            <img className="h-full w-full" src={welcomeImage} alt="welcome-monday" />
        </div>
    </div>
  )
}
