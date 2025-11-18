import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import LoginError from './pages/LoginError';
import Rol from "./pages/Rol";
import Recepcion from "./pages/Recepcion";
import Doc from "./pages/Doc";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/login" element={ <Login />} />
        <Route path="/login-error" element={ <LoginError />} />
        <Route path="/login-success" element={ <LoginSuccess />} />
        <Route path="/rol" element={ <Rol />} />
        <Route path="/recepcion" element={<Recepcion />} />
        <Route path="/doc" element={<Doc />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
