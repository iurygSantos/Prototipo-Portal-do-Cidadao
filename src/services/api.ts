
import axios from "axios";

// cria instância do axios
const api = axios.create({
    baseURL: "/api/api-de-dados",
    headers: {
        "chave-api-dados": import.meta.env.VITE_API_KEY
    }
});

export default api;

console.log(api.defaults.headers);