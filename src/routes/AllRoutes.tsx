import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import LandingPage from "../pages/landingPage/LandingPage";
import { HomePageLayout } from "../layout/homeLayout";
import { RegisterPageLayout } from "../layout/registerLayout";
// import Register from "../pages/register/Register";


const LandingPage = lazy(() => import("../pages/landingPage/LandingPage"))
const Register = lazy(() => import("../pages/register/Register"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomePageLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    },
    {
        path: "/register",
        element: <RegisterPageLayout />,
        children: [
            {
                index: true,
                element: <Register />
            }
        ]
    },
])

