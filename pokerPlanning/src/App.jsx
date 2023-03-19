import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./scss/style.scss";
import "./App.css"
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Session from "./pages/Session/session";
import Navbar from "./components/nav/navbar";
import Home from "./pages/Home/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/session">
              <Route index element={<Session />} />
              <Route path=":id" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>

    // <Signup/>
  );
}

export default App;
