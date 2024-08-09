import { useRoutes } from "react-router-dom";

const useRoutesCustom = () => {
    let element = useRoutes([
    {
        path: "/home",
        element: <h1>Home</h1>,
    },
    ]);

    return element;
}

export default useRoutesCustom