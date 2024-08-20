
import imgWhatBrings from './../../assets/imgs/what-bring.avif'
import imgLogoMini from "./../../assets/imgs/logo-mini-monday.avif";
import ButtonCustom from '../../Components/Buttons/ButtonCustom';
import LayoutRadio from '../../Layouts/LayoutRadio/LayoutRadio';
import { useState } from 'react';

const SurveyQuestion = () => {
  const [whatBring, setWhatBring] = useState("");
  const [yourRole, setYourRole] = useState("");
  const handleWhatBring = e => setWhatBring(e.target.value);
  const handleYourRole = e => setYourRole(e.target.value);

  const renderCurrentRadio = () => {
    let items = [];
    switch (whatBring) {
      case 'Work':
        items = [
          {value: "Business Owner", content: "Business Owner"},
          {value: "Team Leader", content: "Team Leader"},
          {value: "Team Member", content: "Team Member"},
          {value: "Freelancer", content: "Freelancer"},
          {value: "Director", content: "Director"},
          {value: "C-Level", content: "C-Level"},
          {value: "VP", content: "VP"}
        ];
        break;
      case 'School':
        items = [
          {value: "Undergrad Student", content: "Undergrad Student"},
          {value: "Grad Student", content: "Grad Student"},
          {value: "Faculty Member", content: "Undergrad Student"},
          {value: "Other", content: "Other"},
        ];
        break;
      case 'Non-profit':
        items = [
          {value: "Board Member", content: "Board Member"},
          {value: "It Staff", content: "It Staff"},
          {value: "Volunteer", content: "Volunteer"},
          {value: "Employee", content: "Employee"},
          {value: "Executive", content: "Executive"},
          {value: "Other", content: "Other"},
        ];
        break;
      default:
        return;
    }
    return <LayoutRadio 
        items={items} onChange={handleYourRole} value={yourRole} 
        title="What best describe your roles"
      />;
  };
  const contentWhatBrings = {
    title: "What brings you here today",
    items: [
      {value: "Work", content: "Work"},
      {value: "Personal", content: "Personal"},
      {value: "School", content: "School"},
      {value: "Non-profit", content: "Non-profit"},
    ]
  };
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
                    <LayoutRadio 
                      value={whatBring} 
                      onChange={handleWhatBring} 
                      items={contentWhatBrings.items} 
                      title={contentWhatBrings.title}
                    />
                    {whatBring && renderCurrentRadio()}
                </div>
              </div>
              <div className="action_redirect text-right">
                <ButtonCustom content={"Continue"} onClick={() => {alert("Custom")}}/>
              </div>
            </form>
          </div>
        </div>
        <div className='survey_img w-5/12'>
            <img className='h-full w-full' src={imgWhatBrings} />
        </div>
    </div>
  )
}

export default SurveyQuestion