import Home from "../pages/Home/Home";
import About from "../pages/About/About";


const routes= [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/sf',
        element: <Home />,
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
