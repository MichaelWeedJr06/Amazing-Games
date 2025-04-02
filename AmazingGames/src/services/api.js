export async function getGames() {
  const response = await fetch("https://www.freetogame.com/api/games");
  const data = await response.json();
  return data;
}
export async function getGame(gameID) {
  const response = await fetch(
    `https://www.freetogame.com/api/game?id=${gameID}`
  );
  const data = await response.json();
  return data;
}
