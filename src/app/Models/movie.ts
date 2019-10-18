export interface Movie {
  id?: number;
  title?: string;
  overview?: string;
  release_date?: string;
  poster_path?: string;
  backdrop_path?: string;
  genre_ids?: number[];
  vote_count?: number;
  original_language?: string;
  vote_average?: number;
}
