const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

/**
 * 🍿 1. Fetch Trending (Used for Home Screen)
 */ 

// 🖼️ Image helpers return undefined when no path is available
export const getPosterUrl = (path: string) =>
    path ? `https://image.tmdb.org/t/p/w500${path}` : undefined;

export const getBackdropUrl = (path: string) =>
    path ? `https://image.tmdb.org/t/p/original${path}` : undefined;

export const fetchTrendingMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("GTC Engine Error:", error);
        return [];
    }
};

// ... keep your other functions (searchMovies, fetchMoviesByGenre) below

/**
 * 🔍 2. Search Movies (Used for Omni-Intent Search & Vibe logic)
 */
export const searchMovies = async (query: string) => {
    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("GTC Engine Error (Search):", error);
        return [];
    }
};

/**
 * 📄 3. Get Movie Detail (Used for Screen #6: Detail Screen)
 */
export const fetchMovieDetail = async (movieId: number) => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,credits`
        );
        return await response.json();
    } catch (error) {
        console.error("GTC Engine Error (Detail):", error);
        return null;
    }
};

/**
 * 🎭 4. Fetch by Genre (Used for Screen #4: Results Screen)
 */
export const fetchMoviesByGenre = async (genreId: number) => {
    try {
        const response = await fetch(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`
        );
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("GTC Engine Error (Genre):", error);
        return [];
    }
};