import axios, { AxiosResponse } from "axios";

const apiTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "e0d5964faa043afa918d9a7035a55a8d",
    language: "pt-BR",
  },
});
export interface MovieItem {
  id: string;
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
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

interface CastResponse {
  cast: Array<{
    id: string;
    name: string;
    character: string;
    profile_path: string | null;
  }>;
}

interface GetMovieTrailerResponse {
  id: string;
  results: Array<{
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }>;
}

// Função para buscar detalhes do filme
export function getMovieDetails(movieId: string): Promise<AxiosResponse<MovieDetailsResponse, any>> {
  const url = `movie/${movieId}`;
  return apiTMDB.get(url);
}

// Função para buscar elenco do filme
export function getMovieCast(movieId: string): Promise<AxiosResponse<CastResponse, any>> {
  const url = `movie/${movieId}/credits`;
  return apiTMDB.get(url);
}


export function getPopularMovies(): Promise<AxiosResponse<getPopularMoviesResponse, any>> {
  const url = `movie/popular?api_key=e0d5964faa043afa918d9a7035a55a8d&language=pt-BR`;

  return apiTMDB.get(url);
}

export function getMoviesByGenre(genreId: string): Promise<AxiosResponse<getMoviesByGenreResponse, any>> {
  return apiTMDB.get(`discover/movie?api_key=e0d5964faa043afa918d9a7035a55a8d&with_genres=${genreId}&language=pt-BR`);
}

// Função para pegar o trailer de um filme
export function getMovieTrailer(movieId: string): Promise<AxiosResponse<GetMovieTrailerResponse, any>> {
  const url = `movie/${movieId}/videos?api_key=e0d5964faa043afa918d9a7035a55a8d&language=pt-BR`;

  return apiTMDB.get(url);
}