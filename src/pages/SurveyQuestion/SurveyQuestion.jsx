
import whatBrings from './../../assets/imgs/what-bring.avif'
import imgLogoMini from "./../../assets/imgs/logo-mini-monday.avif";
import ButtonCustom from '../../Components/Buttons/ButtonCustom';
import LayoutRadio from '../../Layouts/LayoutRadio/LayoutRadio';

const SurveyQuestion = () => {
  return (
    <div className='h-screen flex'>
        <div className='survey_content w-7/12 px-32 py-16'>
          <div className='survey_content'>
            <form className='flex flex-col h-full'>
              <div className='flex-1'>
                <img className='h-6' src={imgLogoMini} alt="" />
              </div>
              <div className="survey_checkbox">
                <div className="survey_radio">
                    <LayoutRadio />
                </div>
              </div>
              <div className="action_redirect text-right">
                <ButtonCustom content={"Continue"} onClick={() => {alert("Custom")}}/>
              </div>
            </form>
          </div>
        </div>
        <div className='survey_img w-5/12'>
            <img className='h-full w-full' src={whatBrings} />
        </div>
    </div>
  )
}

export default SurveyQuestion