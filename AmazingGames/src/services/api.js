export async function getGames(category, filter) {
  let url = "";
  if (category != "" && filter == "") {
    url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
  } else if (filter != "" && category == "") {
    url = `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${filter}`;
  } else if (filter != "" && category != "") {
    url = `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${filter}?category=${category}`;
  } else {
    url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
  }
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
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
