import axios from"axios";

export const api = axios.create({
    baseURL: "https://fakeapi-2h6z.onrender.com/"
})