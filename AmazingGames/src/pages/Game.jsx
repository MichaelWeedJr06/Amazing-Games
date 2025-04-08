import { useState, useEffect } from "react";
import { getGame } from "../services/api";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap CSS is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/Game.css";
export default function Game({ gameID }) {
  const [game, setGame] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let Game = async () => {
      if (!gameID) return;
      try {
        let response = await getGame(gameID);
        setGame(response);
      } catch (err) {
        setError("failed to load game data");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    Game();
  }, [gameID]);
  console.log(game);
  return (
    <div className="container">
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="container container-game">
          <div className="title-game">{game.title}</div>
          <div className="thumbnail">
            <img
              src={game.thumbnail}
              alt={game.title}
              className="thumbnail-img"
            />
          </div>
          <div className="links row">
            <a href={game.game_url} className="game_url">
              Game Url
            </a>

            <a href={game.freetogame_profile_url} className="game_profile">
              Free to Game {game.title}'s game profile
            </a>
          </div>
          <div className="genre">
            <span className="title">Genre:</span> {game.genre}
          </div>
          <div className="release-date-and-platform">
            <div className="release-date">
              <span className="title">Release Date:</span> {game.release_date}
            </div>
            <div className="platform">
              <span className="title">Platform: </span>
              {game.platform}
            </div>
          </div>
          <div className="publisher-and-developer">
            <div className="publisher">
              <span className="title">Publisher:</span> {game.publisher}
            </div>
            <div className="developer">
              <span className="title">Developer:</span> {game.developer}
            </div>
          </div>
          <div className="long-description">
            <h3 className="title">Description</h3>
            {game.description}
          </div>
          <div className="screenshots">
            <h3 className="title">Screenshots</h3>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {game.screenshots.map((screenshot, i) => (
                  <div className="carousel-item active" key={i}>
                    <img
                      key={i}
                      className="d-block w-100"
                      src={screenshot.image}
                      alt={screenshot.id}
                    />
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="min-system-requirements">
            <h3 className="title">System Requirements</h3>
            {game.minimum_system_requirements &&
              SysRequire(game.minimum_system_requirements)}
            {!game.minimum_system_requirements && (
              <p className="no_data">No System Data Found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
function SysRequire(gameReq) {
  return (
    <div className="requirements">
      <h3 className="os">
        <span className="title">OS:</span> {gameReq.os}
      </h3>
      <h3 className="processor">
        <span className="title">Processor:</span> {gameReq.processor}
      </h3>
      <h3 className="memory">
        <span className="title">Memory: </span>
        {gameReq.memory}
      </h3>
      <h3 className="graphics">
        <span className="title">Graphics: </span>
        {gameReq.graphics}
      </h3>
      <h3 className="storage">
        <span className="title">Storage: </span>
        {gameReq.storage}
      </h3>
    </div>
  );
}
