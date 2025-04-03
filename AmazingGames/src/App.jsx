import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
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
