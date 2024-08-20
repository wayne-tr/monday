import { DatePicker } from "antd";
import { useRoutes } from "react-router-dom";
import { Demo2 } from "../Components/Demo2";
import { SignUpNew } from "../pages/SignUpNew/SignUpNew";
import GetInfoRegister from "../pages/GetInfoRegister/GetInfoRegister";
import SurveyQuestion from "../pages/SurveyQuestion/SurveyQuestion";

const useRoutesCustom = () => {

    let element = useRoutes([
    {
        path: "/home",
        element: < SignUpNew/>,
    },
    {
        path: "/survey",
        element: < SurveyQuestion/>,
    },
    {
        path: "/setup",
        element: < GetInfoRegister/>,
    },  
    {
        path: "/demo-1",
        element: <><DatePicker ></DatePicker><h1 className="text-3xl font-bold underline text-center">Home</h1></>,
    },
    {
        path: "/demo-2",
        element: <Demo2 />,
    },
    ]);

    return element;
}

export default useRoutesCustom