import axios from "axios"


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    timeout:2000,    
})

export default instance