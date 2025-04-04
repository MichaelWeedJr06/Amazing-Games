import GameCard from "../components/GameCard";
import { getGames } from "../services/api";
import { useState, useEffect } from "react";
import "../css/Home.css";

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const GetGames = async () => {
      try {
        const response = await getGames();
        setGames(response);
      } catch (err) {
        setError("Failed to load games : Home.jsx, line 10");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    GetGames();
  }, []);
  if (loading == true) return <h2>loading.....</h2>;
  if (error != null) return <p>error:{error}</p>;
  return (
    <div className="grid">
      {games.map((game, i) => (
        <GameCard key={i} gameData={game} />
      ))}
    </div>
  );
}
