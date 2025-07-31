import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_NY_URL_ENDPOINT;
const API_KEY = import.meta.env.VITE_NY_KEY;

export async function callArticles(section) {
    try {
        const url = `${API_ENDPOINT}/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.error("Error Fetching API", error);
        return [];
    }
}

export async function searchArticles(query) {
    try {
        const url = `${API_ENDPOINT}/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`;
        const response = await axios.get(url);
        return response.data.response.docs;
    } catch (error) {
        console.error("Gagal menemukan pencarian", error);
        return [];
    }
}