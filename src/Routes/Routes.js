import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../Components/AboutMe/AboutMe";
import Blogs from "../Components/Blogs/Blogs";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Main from "../Components/Layout/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <AboutMe></AboutMe>
            }
            /* {
                path: '/contact',
                element: <ContactForm></ContactForm>
            },
            {
                path: '/projectDetails/:id',
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: '/about',
                element: <About></About>
            } */
        ]
    }
])

export default router;