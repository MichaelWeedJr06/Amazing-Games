export async function getGames() {
  const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "079a0b2de3msh73c2b064e59ab40p14d16fjsn75a0a152d762",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let result;
  try {
    const response = await fetch(url, options);
    result = await response.json();
  } catch (error) {
    console.error(error);
  }
  return result;
}
export async function getGame(gameID) {
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "079a0b2de3msh73c2b064e59ab40p14d16fjsn75a0a152d762",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}
