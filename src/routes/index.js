import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";


const publicRoutes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/*',
        element: <h1>404</h1>,
    },
];

const protectedRoutes= [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    }
];

export {publicRoutes, protectedRoutes};
