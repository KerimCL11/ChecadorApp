import axios from "axios";

// Instance for production
const prdAxios = axios.create({
    baseURL: import.meta.env.VITE_PRDServer,
});

// Instance for development
const devAxios = axios.create({
    baseURL: import.meta.env.VITE_DEVServer,
});

export { prdAxios, devAxios };