import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_NY_URL_ENDPOINT;
const API_KEY = import.meta.env.VITE_NY_KEY;
const section = 'home';

export async function callArticles(section){
    const url = `${API_ENDPOINT}/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
} 