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
        <div className="container">
          <div className="game-title">{game.title}</div>
          <div className="thumbnail">
            <img
              src={game.thumbnail}
              alt={game.title}
              className="thumbnail-img"
            />
          </div>
          <h5 className="genre title">
            Genre: <span className="text">{game.genre}</span>
          </h5>
          <div className="links">
            <a className="game_url" href={game.game_url}>
              Game Url
            </a>

            <a href={game.freetogame_profile_url} className="game_profile">
              Free to Game {game.title}'s game profile
            </a>
          </div>
          <div className="release-date-and-platform title">
            <h5 className="release-date">
              Release Date: <span className="text">{game.release_date}</span>
            </h5>
            <h5 className="platform">
              Platform: <span className="text">{game.platform}</span>
            </h5>
          </div>
          <div className="publisher-and-developer title">
            <h5 className="publisher">
              Publisher: <span className="text">{game.publisher}</span>
            </h5>
            <h5 className="developer">
              Developer: <span className="text">{game.developer}</span>
            </h5>
          </div>
          <div className="long-description">
            <h5 className="title">Description</h5>
            <span className="text">{game.description}</span>
          </div>
          {game.screenshots?.length > 0 && (
            <div className="game-screenshots my-4">
              <h3>Screenshots</h3>
              <div
                id="screenshotsCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {game.screenshots.map((screenshot, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={screenshot.id}
                    >
                      <img
                        src={screenshot.image}
                        className="d-block w-100"
                        alt={`Screenshot ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#screenshotsCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#screenshotsCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          )}
          <div className="min-system-requirements">
            <h3 className="title">System Requirements</h3>
            {!game.minimum_system_requirements && <p>No Data Found</p>}
            {game.minimum_system_requirements && (
              <>
                <div className="os title-req">
                  OS:
                  <span className="text">
                    {game.minimum_system_requirements.os}
                  </span>
                </div>
                <div className="processor title-req">
                  Processor:
                  <span className="text">
                    {" "}
                    {game.minimum_system_requirements.processor}
                  </span>
                </div>
                <div className="memory title-req">
                  Memory:
                  <span className="text">
                    {" "}
                    {game.minimum_system_requirements.memory}
                  </span>
                </div>
                <div className="graphics title-req">
                  Graphics:{" "}
                  <span className="text">
                    {game.minimum_system_requirements.graphics}
                  </span>
                </div>
                <div className="storage title-req">
                  Storage:
                  <span className="text">
                    {game.minimum_system_requirements.storage}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
