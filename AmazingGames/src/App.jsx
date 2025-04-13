import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Game from "./pages/Game";

function GameWrapper() {
  const { id } = useParams();
  return <Game gameID={id} />;
}

function App() {
  return (
    <div className="page">
      
      <BrowserRouter>
      <NavBar />
        <Routes >
          <Route path="/home" element={<Home />} />
          <Route path="/game/:id" element={<GameWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
