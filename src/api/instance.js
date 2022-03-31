import axios from "axios"


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    orginalImage:"https://image.tmdb.org/t/p/original",
    w500Image:"https://image.tmdb.org/t/p/w500",
})

export default instance