import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {publicRoutes, protectedRoutes} from "./routes/index";
import {Helmet} from "react-helmet";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";


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
          <Route element={<ProtectedRoutes isAllowed={false} />}>
            {protectedRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}/>
            ))}
          </Route>
          <Route>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}/>
            ))}
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
