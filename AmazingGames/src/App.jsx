import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import GameCard from "./components/GameCard";
import Home from "./pages/Home";
function App() {
  return (
    <div className="page">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
