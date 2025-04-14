import { useState, useEffect } from "react";
import { getGames } from "../services/api";
import GameCard from "../components/GameCard";
import "../css/category.css";
import { useFilterContext } from "../context/FilterContext";
export default function Category({ category }) {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { filter } = useFilterContext();
  const [Filter, setFilter] = useState("");

  useEffect(() => {
    setFilter(filter);
  }, [filter]);
  useEffect(() => {
    let Category = async () => {
      if (!category) return;
      try {
        let response = await getGames(category, Filter);
        setGames(response);
      } catch (err) {
        setError("failed to load game data");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    Category();
  }, [category, filter]);
  if (loading == true) return <h2>loading.....</h2>;
  if (error != null) return <p>error:{error}</p>;
  return (
    <>
      <div className="title-category">{category}</div>
      <div className="grid">
        {games.map((game, i) => (
          <GameCard key={i} gameData={game} />
        ))}
      </div>
    </>
  );
}
