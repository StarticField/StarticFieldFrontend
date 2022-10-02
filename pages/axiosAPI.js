import axios from 'axios'

const token = (typeof window !== "undefined")?localStorage.getItem("access_token"):"none";
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + token,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});
