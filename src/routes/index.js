import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";


const routes= [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/*',
        element: <h1>404</h1>,
    },
];

export default routes;
