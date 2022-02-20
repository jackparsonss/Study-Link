import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = onAuthStateChanged(auth, (user) => {
      if (!user) {
        return navigate("/signup");
      }
    });
    return loggedIn;
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
