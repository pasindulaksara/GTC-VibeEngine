const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const fetchTrendingMovies = async () => {
    try{
        const response = await fetch(
          `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
        );
        const data = await response.json();
        return data.results;

    }catch (error) {
        console.error("GTC Engine Error:", error);
        return [];
    }
}