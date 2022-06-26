// interface for movies
export interface IMovies {
  messageStatus: string
  results: IMoviesResults[]
  status: number
  success: boolean
  total_pages: number
  total_results: number
}
export interface IMoviesResults {
  actors: []
  countries: IMoviesResultsCountries[]
  createdAt: string
  description: string
  directors: []
  embedUrls: IMoviesResultsCountriesEmbedUrls[]
  episodes: []
  escritors: []
  genres: IMoviesResultsGenres[]
  image: string
  index: number
  otherTitles: []
  rating: string
  release: string
  title: string
  titleOriginal: string
  updatedAt: string
  uuid: string
  year: string
  _id: string
}
export interface IMoviesResultsCountries {
  name: string
  uuid: string
}
export interface IMoviesResultsCountriesEmbedUrls {
  priority: number
  server: string
  url: string
}
export interface IMoviesResultsGenres {
  name: string
  uuid: string
}


// interface for search-movie
export interface ISearchMovie {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: ISearchMovieBelongsToCollection
  budget: number
  genres: ISearchMovieGenres[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ISearchMovieProductionCompanies[]
  production_countries: ISearchMovieProductionCountries[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: ISearchMovieSpokenLanguages[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
export interface ISearchMovieBelongsToCollection {
  backdrop_path: string
  id: number
  name: any
  poster_path: string
}
export interface ISearchMovieGenres {
  id: number
  name: string
}
export interface ISearchMovieProductionCompanies {
  id: number
  logo_path: string
  name: string
  origin_country: string
}
export interface ISearchMovieProductionCountries {
  iso_3166_1: string
  name: string
}
export interface ISearchMovieSpokenLanguages{
  english_name: string
  iso_639_1: string
  name: string
}



// interface for list-movie
export interface IListMovie {
  messageStatus: string
  result: IListMovieResult
  status: number
  success: boolean
}
export interface IListMovieResult {
  actors: []
  countries: IListMovieCountries[]
  createdAt: string
  description: string
  directors: []
  embedUrls: IListMovieEmbedUrls[]
  episodes: []
  escritors: []
  genres: IListMovieGenres[]
  image: string
  index: number
  otherTitles: []
  rating: string
  release: string
  title: string
  titleOriginal: string
  updatedAt: string
  uuid: string
  year: string
  _id: string
}
export interface IListMovieCountries {
  name: string
  uuid: string
}
export interface IListMovieEmbedUrls {
  server: string
  url: string
  priority: number
}
export interface IListMovieGenres {
  name: string
  uuid: string
}


// interface for search-movies
export interface ISearchMovies {
  page: number
  results: ISearchMoviesResults[]
  total_page: number
  total_results: number
}
export interface ISearchMoviesResults {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}