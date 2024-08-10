import { DatePicker } from "antd";
import { useRoutes } from "react-router-dom";
import { Demo } from "../Components/Demo";

const useRoutesCustom = () => {
    let element = useRoutes([
    {
        path: "/home",
        element: <><DatePicker ></DatePicker><h1 className="text-3xl font-bold underline text-center">Home</h1></>,
    },
    {
        path: "/demo",
        element: <Demo />,
    },
    ]);

    return element;
}

export default useRoutesCustom