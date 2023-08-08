import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
// import Home from "../pages/HomePage/Home/Home";
import Category from "../pages/HomePage/category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/NewsPage/News/News";
import LoginLayout from "../layouts/LoginLayout";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: 'login',
                element: <LoginPage></LoginPage>
            },
            {
                path: 'register',
                element: <RegisterPage></RegisterPage>
            }
        ]
    },
    {
        path: 'category',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-sews-rakib333.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-sews-rakib333.vercel.app/news/${params.id}`)
            }
        ]
    },


])

export default router;