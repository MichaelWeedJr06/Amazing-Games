import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Categories from "./pages/categories";
import Category from "./pages/category";
import { FilterProvider } from "./context/FilterContext";

function GameWrapper() {
  const { id } = useParams();
  return <Game gameID={id} />;
}

function CategoriesWrapper() {
  const { category } = useParams();
  return <Category category={category} />;
}

function App() {
  return (
    <FilterProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/game/:id" element={<GameWrapper />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<CategoriesWrapper />} />
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  );
}

export default App;
