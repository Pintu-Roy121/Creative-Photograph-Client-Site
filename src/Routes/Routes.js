import Blog from "../pages/Blog/Blog";
import Main from "../layout/Main/Main";
import AddReview from "../pages/AddReview/AddReview";
import AddService from "../pages/AddService/AddService";
import AllServices from "../pages/AllServices/AllServices";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import SignUp from "../pages/SignUp/SignUp";
import UpdateReview from "../pages/UpdateReview/UpdateReview";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import PageNotFound from "../Shared/PageNotFound/PageNotFound";

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/addreview/:id',
                element: <PrivateRoutes><AddReview></AddReview></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://creative-photograph-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><UpdateReview></UpdateReview></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://creative-photograph-server.vercel.app/review/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    }
])

export default router;