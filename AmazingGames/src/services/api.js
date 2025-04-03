export async function getGames() {
  const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let result = {};

  try {
    const response = await fetch(url, options);
    result = await response.json();
    console.log(result);
  } catch (error) {
    console.erro;
    console.error(error);
  }
  return result;
}
export async function getGame(gameID) {
  const response = await fetch(
    `https://www.freetogame.com/api/game?id=${gameID}`
  );
  const data = await response.json();
  return data;
}
