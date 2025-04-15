import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap CSS is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/GameCard.css";
import { Link } from "react-router";
export default function GameCard({ gameData }) {
  return (
    <div className="game-card card">
      <img src={gameData.thumbnail} alt="" className="card-image" />
      <div className="card-body">
        <h5 className="card-title">{gameData.title}</h5>
        <div className="release-date">{gameData.release_date}</div>
        <div className="card-text">{gameData.short_description}</div>
        <Link to={`/game/${gameData.id}`}>View More</Link>
      </div>
    </div>
  );
}
