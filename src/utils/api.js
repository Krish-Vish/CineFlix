import axios from "axios";

const BASE_URL = "http://api.themoviedb.org/3"

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2Q3YmQ2NzE2ZmIyMGY0MzE2NjQwMTFlZWQ2MDAwMCIsInN1YiI6IjY0YTU2OTZkNWE5OTE1MDExZGQzODc5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xahzyWfYKJ_Och8b1A_obB0qTKlVllD7JsmkMeT2cbM";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params,
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};