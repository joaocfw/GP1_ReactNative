import axios, { AxiosResponse } from "axios";

const apiTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

interface MovieItem {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

interface MovieItem {
  id: number;
  title: string;
  poster_path: string;
}

interface GetMoviesByGenreResponse {
  results: MovieItem[];
}

export function getMoviesByGenre(genreId: number): Promise<AxiosResponse<GetMoviesByGenreResponse, any>> {
  return apiTMDB.get(`discover/movie?api_key=e0d5964faa043afa918d9a7035a55a8d&with_genres=${genreId}&language=pt-BR`);
}