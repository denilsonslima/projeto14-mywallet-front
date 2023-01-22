import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewEntry from "./pages/NewEntry";
import NewExit from "./pages/NewExit";
import SignUp from "./pages/SignUp";

function App() {
  const [token, setToken] = useState(null)
  const [name, setName] = useState("Usuário")
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setToken={setToken} setName={setName} />}></Route>
          <Route path="/cadastro" element={<SignUp />}></Route>
          <Route path="/home" element={<Home token={token} name={name} />}></Route>
          <Route path="/nova-entrada" element={<NewEntry token={token} />}></Route>
          <Route path="/nova-saida" element={<NewExit token={token} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
