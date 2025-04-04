import { useState, useEffect } from "react";
import { getGame } from "../services/api";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap CSS is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js";
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
  return (
    <div className="container">
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="container">
          <div className="title">{game.title}</div>
          <div className="thumbnail">
            <img
              src={game.thumbnail}
              alt={game.title}
              className="thumbnail-img"
            />
          </div>
          <div className="genre">Genre: {game.genre}</div>
          <div className="links row">
            <a href={game.game_url}>Game Url</a>

            <a href={game.freetogame_profile_url}>
              Free to Game {game.title}'s game profile
            </a>
          </div>
          <div className="release-date-and-platform">
            <div className="release-date">
              Release Date: {game.release_date}
            </div>
            <div className="platform">Platform: {game.platform}</div>
          </div>
          <div className="publisher-and-developer">
            <div className="publisher">Publisher: {game.publisher}</div>
            <div className="developer">Developer: {game.developer}</div>
          </div>
          <div className="long-description">{game.description}</div>
          <div className="screenshots">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {game.screenshots.map((screenshot, i) => (
                  <div className="carousel-item active" key={i}>
                    <img
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
          <div className="min-system-requirements"></div>
        </div>
      )}
    </div>
  );
}
