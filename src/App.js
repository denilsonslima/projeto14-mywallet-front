import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewEntry from "./pages/NewEntry";
import NewExit from "./pages/NewExit";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/cadastro" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/nova-entrada" element={<NewEntry />}></Route>
          <Route path="/nova-saida" element={<NewExit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
