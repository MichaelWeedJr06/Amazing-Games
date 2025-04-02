export async function getGames() {
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '079a0b2de3msh73c2b064e59ab40p14d16fjsn75a0a152d762',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
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
  const response = await fetch(
    `https://www.freetogame.com/api/game?id=${gameID}`
  );
  const data = await response.json();
  return data;
}
