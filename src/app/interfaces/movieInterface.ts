import { MediaBase } from './mediaBase';

export interface MovieInterface extends MediaBase {
  title?: string;
  original_title?: string;
  genres_ids: number[];
  release_date?: string;
  runtime?: number;
  director?: string;
  budget?: number;
  revenue?: number;
  video?: boolean;
}

export interface MovieDetailInterface
  extends Omit<MovieInterface, 'genres_ids'> {
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  genres?: {
    id: number;
    name: string;
  }[];
  homepage?: string;
  imdb_id?: string;
  production_companies?: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries?: {
    iso_3166_1: string;
    name: string;
  }[];
  spoken_languages?: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status?: string;
  videos?: {
    results:
      {
        id: string;
        iso_639_1: string;
        iso_3166_1: string;
        key: string;
        name: string;
        site: string;
        size: number;
        type: string;
      }[];
  };
}
