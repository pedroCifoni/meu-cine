import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=cb40d942ef954049e50e2eb38c3f5a31&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});
export default api;