import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import routes from "./routes/index";
import {Helmet} from "react-helmet";


function App() {
  return (
    <BrowserRouter>
        <Helmet>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />

        </Helmet>
        <Routes>
            {
                routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
                ))
            }
        </Routes>
    </BrowserRouter>
  );
}

export default App;
