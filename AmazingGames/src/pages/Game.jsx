import { useState, useEffect } from "react";
import { getGame } from "../services/api";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap CSS is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/Game.css"
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
          <div className="game-title">{game.title}</div>
          <div className="thumbnail">
            <img
              src={game.thumbnail}
              alt={game.title}
              className="thumbnail-img"
            />
          </div>
          <h5 className="genre">Genre: <span className="text">{game.genre}</span></h5>
          <div className="links">
            <a className="game_url" href={game.game_url}>Game Url</a>

            <a href={game.freetogame_profile_url}>
              Free to Game {game.title}'s game profile
            </a>
          </div>
          <div className="release-date-and-platform">
            <h5 className="release-date">
              Release Date: <span className="text">{game.release_date}</span>
            </h5>
            <h5 className="platform">Platform: <span className="text">{game.platform}</span></h5>
          </div>
          <div className="publisher-and-developer">
            <h5 className="publisher">Publisher: <span className="text">{game.publisher}</span></h5>
            <h5 className="developer">Developer: <span className="text">{game.developer}</span></h5>
          </div>
          <div className="long-description">
          <h5 className="title">Description</h5>
          <span className="text">{game.description}</span>
          </div>
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
          <div className="min-system-requirements">
          <h3 className="title">System Requirements</h3>
            {!game.minimum_system_requirements && <p>No Data Found</p>}
            {game.minimum_system_requirements && <>
            <div className="os">OS:<span className="text"> {game.minimum_system_requirements.os}</span></div>
            <div className="processor">Processor:<span className="text"> {game.minimum_system_requirements.processor}</span></div>
            <div className="memory">Memory:<span className="text"> {game.minimum_system_requirements.memory}</span></div>
            <div className="graphics">Graphics: <span className="text">{game.minimum_system_requirements.graphics}</span></div>
            <div className="storage">Storage: <span className="text">{game.minimum_system_requirements.storage}</span></div>


            </>}
          </div>
        </div>
      )}
    </div>
  );
}
