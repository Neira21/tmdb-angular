import { MediaBase } from "./mediaBase";

export interface TvInterface extends MediaBase {
  name: string;
  original_name: string;
  first_air_date: string;
  original_country: string[];
  genres_ids: string[];
  cast?: { name: string; character: string }[];
}



export interface TvDetailInterface extends Omit<TvInterface, 'genres_ids'> {
  genres: {
    id: number;
    name: string;
  }[];
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    original_name: string;
    gender: number;
    profile_path: string | null;
  }[];
  episode_run_time: number[];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string | null;
  };
  next_episode_to_air: any; // Puede ser null o un objeto similar a last_episode_to_air
  number_of_episodes: number;
  number_of_seasons: number;
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
  }[];
  in_production: boolean;
  languages: string[];
  type: string;
  homepage: string;
  networks: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;

}
