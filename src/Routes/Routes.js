import Main from "../layout/Main/Main";
import AddReview from "../pages/AddReview/AddReview";
import AddService from "../pages/AddService/AddService";
import AllServices from "../pages/AllServices/AllServices";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

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
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://creative-photograph-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/addreview/:id',
                element: <PrivateRoutes><AddReview></AddReview></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://creative-photograph-server.vercel.app/service/${params.id}`)
            },
        ]
    }
])

export default router;