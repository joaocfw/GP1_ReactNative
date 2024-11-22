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

interface GetMoviesByGenreResponse {
  results: MovieItem[];
}

interface GetPopularMoviesResponse {
  results: MovieItem[];
}

interface SearchMoviesResponse {
  results: MovieItem[];
}

export interface MovieDetailsResponse {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

export interface CastResponse {
  cast: Array<{
    id: string;
    name: string;
    character: string;
    profile_path: string | null;
  }>;
}

export interface GetMovieTrailerResponse {
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

export function getMovieDetails(movieId: string): Promise<AxiosResponse<MovieDetailsResponse, any>> {
  return apiTMDB.get(`movie/${movieId}`);
}

export function getMovieCast(movieId: string): Promise<AxiosResponse<CastResponse, any>> {
  return apiTMDB.get(`movie/${movieId}/credits`);
}

export function getPopularMovies(): Promise<AxiosResponse<GetPopularMoviesResponse, any>> {
  return apiTMDB.get("movie/popular");
}

export function getMoviesByGenre(genreId: number): Promise<AxiosResponse<GetMoviesByGenreResponse, any>> {
  return apiTMDB.get("discover/movie", { params: { with_genres: genreId } });
}

export function searchMovies(query: string): Promise<AxiosResponse<SearchMoviesResponse, any>> {
  return apiTMDB.get("search/movie", { params: { query } });
}

export function getMovieTrailer(movieId: string): Promise<AxiosResponse<GetMovieTrailerResponse, any>> {
  return apiTMDB.get(`movie/${movieId}/videos`);
}
