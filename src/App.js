import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import routes from "./routes/index";


function App() {
  return (
    <BrowserRouter>
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
