export interface MediaBase {
  id: number;
  adult: boolean;
  overview: string;
  original_language: string;
  popularity?: number;
  vote_average?: number;
  vote_count?: number;
  poster_path?: string;
  backdrop_path?: string;
  rating?: number;
  tagline?: string;
  language?: string;
}
