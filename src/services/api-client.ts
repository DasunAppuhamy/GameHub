import axios from "axios";

export interface FetchResponse <T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d954511f30e54451b4b778ab0ada4df3",
    }
});