const API_MOVIES_DB = process.env.API_MOVIES_DB;

/*
https://developers.themoviedb.org/3/trending/get-trending
*/

const requests = {
    "Trending": `trending/movie/week?api_key=${API_MOVIES_DB}`,
    "Top Rated": `movie/top_rated?api_key=${API_MOVIES_DB}`,
    "Now Playing": `movie/now_playing?api_key=${API_MOVIES_DB}`,
    "Action": `discover/movie?api_key=${API_MOVIES_DB}&language=pt-PT&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
    "Upcoming": `movie/upcoming?api_key=${API_MOVIES_DB}`,
}
export default requests;
