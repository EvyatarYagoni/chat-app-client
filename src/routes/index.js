import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";


const publicRoutes = [
    {
        path: '/login',
        element: <Login />,
        isProtected: false
    },
    {
        path: '/signup',
        element: <Signup />,
        isProtected: false
    },
    {
        path: '/*',
        element: <h1>404</h1>,
        isProtected: false
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
        isProtected: false
    }
];

export {publicRoutes, protectedRoutes};
