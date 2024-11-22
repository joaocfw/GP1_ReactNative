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

interface getPopularMoviesResponse {
  page: number;
  results: MovieItem[];
  total_pages: number;
  total_results: number;
}

export function getPopularMovies(): Promise<AxiosResponse<getPopularMoviesResponse, any>> {
  const url = `movie/popular?api_key=e0d5964faa043afa918d9a7035a55a8d&language=pt-BR`;

  return apiTMDB.get(url);
}

export function getMoviesByGenre(genreId: number): Promise<AxiosResponse<GetMoviesByGenreResponse, any>> {
  return apiTMDB.get(`discover/movie?api_key=e0d5964faa043afa918d9a7035a55a8d&with_genres=${genreId}&language=pt-BR`);
}