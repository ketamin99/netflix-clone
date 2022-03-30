const apiKey= "73d0844d8515ba415b1f54f609286153"

const requests = {
    fetchTrendingMovie:`trending/movie/week?api_key=${apiKey}`,
    fetchTrendingTv: `trending/tv/week?api_key=${apiKey}`,
}

export default requests