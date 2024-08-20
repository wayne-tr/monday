import { DatePicker } from "antd";
import { useRoutes } from "react-router-dom";
import { Demo2 } from "../Components/Demo2";
import { SignUpNew } from "../pages/SignUpNew/SignUpNew";

const useRoutesCustom = () => {

    let element = useRoutes([
    {
        path: "/",
        element: < SignUpNew/>,
    }, 
    {
        path: "/home",
        element: <><DatePicker ></DatePicker><h1 className="text-3xl font-bold underline text-center">Home</h1></>,
    },
    {
        path: "/demo",
        element: <Demo2 />,
    },
    ]);

    return element;
}

export default useRoutesCustom