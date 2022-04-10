
function RequestMvDetail({ mvId }) {
    const apiKey= "73d0844d8515ba415b1f54f609286153"
    const requests ={
        fetchMoviesYoutube:`/movie/${mvId}/videos?api_key=${apiKey}`,
        fetchMovieDetail:`/movie/${mvId}/videos?api_key=${apiKey}}&language=en-US`
    }
}

export default RequestMvDetail