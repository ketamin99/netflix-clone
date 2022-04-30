import axios from './instance'
import requests from './requestsMvList'

const tmdbApi= {
    fetchMovieVideos: (movieId)=>{
        return axios.get(`/movie/${movieId}/videos?${requests.apiKey}`)
    },
    fetchMovieDetails: (movieId)=> {
        return axios.get(`movie/${movieId}?${requests.apiKey}`)
    },
    fetchMovieKeywords: (keyword) => {
        return axios.get(`${requests.fetchSearchKeyword}query=${keyword}`)
    },
    
}

  export default tmdbApi;