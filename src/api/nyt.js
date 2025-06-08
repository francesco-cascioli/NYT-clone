import axios from "axios";

const API_KEY = "57DJbsOAuF5XYrJI589gh931ABK0wm17"

const BASE_URL = "https://api.nytimes.com/svc/topstories/v2";

export const fetchTopStories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/home.json?api-key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Errore nel fetch delle notizie:", error);
    return [];
  }
};

export const searchArticles = async (query) => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`
    );
    return response.data.response.docs;
  } catch (error) {
    console.error("Errore nella ricerca:", error);
    return [];
  }
};

