import Main from "../layout/Main/Main";
import AllServices from "../pages/AllServices/AllServices";
import Home from "../pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            }
        ]
    }
])

export default router;