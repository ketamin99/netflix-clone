
export const apiKey= "73d0844d8515ba415b1f54f609286153"

const requests = {
    fetchTrendingMovie:`trending/movie/week?api_key=${apiKey}`,
    fetchNetflixOriginals: `/discover/movie?api_key=${apiKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumantaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
    apiKey: `api_key=${apiKey}&language=en-US`,
    fetchSearchKeyword:`/search/movie?api_key=${apiKey}&language=en-US&query=k&`,
    orginalImage: "https://image.tmdb.org/t/p/original",

}

export default requests