import imgLogoMini from "./../../assets/imgs/logo-mini-monday.avif";
import imgInviteMember from "./../../assets/imgs/invite-teammates.avif";
import InputDropdown from "../../Components/Inputs/InputDropdown";
import { useState } from "react";

const InviteMember = () => {
  const [inputInvitelist, setInputInvitelist] = useState(["admin", "admin"]);
  const options = [{
    value: "Admin",
    label: "Admin",
    desc: "Can invite and manage new users",
  }, {
    value: "Member",
    label: "Member",
    desc: "Can add and edit content",
  }]
  return (
    <div className="h-screen flex">
        <div className="invite_content w-7/12 px-32 py-16">
          <div className="flex flex-col w-3/4 h-full">
            <div className="content_logo flex-1">
                <img className='h-6' src={imgLogoMini} />
            </div>
            <div className="content_field">
              <h1 className="text-2xl">Who else is on your team</h1>
              {inputInvitelist.map(iv => <InputDropdown key={iv} options={options} defaultValue={options[0].value} placeholder="Add email here"/>)}
              <button 
                onClick={()=> setInputInvitelist([...inputInvitelist, "admin"])} 
                className="py-2 px-4 hover:bg-gray-200 rounded ">
                  Add another
              </button>
            </div>
            <div className="content_action flex justify-between">
                <button className="py-2 px-4 hover:bg-gray-400">Invite your team</button>
                <button className=" py-2 px-4 hover:bg-gray-400">Remind me later</button>
            </div>
          </div>
        </div>
        <div className="invite_img w-5/12">
            <img className="h-full w-full" src={imgInviteMember} />
        </div>
    </div>
  )
}

export default InviteMember;