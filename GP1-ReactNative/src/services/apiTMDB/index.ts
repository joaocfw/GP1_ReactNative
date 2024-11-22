import axios, { AxiosResponse } from "axios";

const apiTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "e0d5964faa043afa918d9a7035a55a8d",
    language: "pt-BR",
  },
});
export interface MovieItem {
  id: number;
  title: string;
  poster_path: string;
}
interface getMoviesByGenreResponse {
  results: MovieItem[];
}

interface getPopularMoviesResponse {
  results: MovieItem[];
}

// Tipagem das respostas
interface MovieDetailsResponse {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

interface CastResponse {
  cast: Array<{
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
  }>;
}

// Função para buscar detalhes do filme
export function getMovieDetails(movieId: number): Promise<AxiosResponse<MovieDetailsResponse>> {
  const url = `movie/${movieId}`;
  return apiTMDB.get(url);
}

// Função para buscar elenco do filme
export function getMovieCast(movieId: number): Promise<AxiosResponse<CastResponse>> {
  const url = `movie/${movieId}/credits`;
  return apiTMDB.get(url);
}


export function getPopularMovies(): Promise<AxiosResponse<getPopularMoviesResponse, any>> {
  const url = `movie/popular?api_key=e0d5964faa043afa918d9a7035a55a8d&language=pt-BR`;

  return apiTMDB.get(url);
}

export function getMoviesByGenre(genreId: number): Promise<AxiosResponse<getMoviesByGenreResponse, any>> {
  return apiTMDB.get(`discover/movie?api_key=e0d5964faa043afa918d9a7035a55a8d&with_genres=${genreId}&language=pt-BR`);
}