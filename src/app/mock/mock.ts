import { IMovies, ISearchMovie } from '../models/models';

// interface for movies
export const mockMovies: IMovies = {
  messageStatus: '',
  results: [
    {
      actors: [],
      countries: [
        { name: '', uuid: '', }
      ],
      createdAt: '',
      description: '',
      directors: [],
      embedUrls: [
        {
          priority: 1,
          server: '',
          url: '',
        }
      ],
      episodes: [],
      escritors: [],
      genres: [
        { name: '', uuid: '', }
      ],
      image: '',
      index: 1,
      otherTitles: [],
      rating: '',
      release: '',
      title: '',
      titleOriginal: '',
      updatedAt: '',
      uuid: '',
      year: '',
      _id: '',
    },
  ],
  status: 1,
  success: false,
  total_pages: 1,
  total_results: 1,
}



// interface for search-movie
export const mockSearchMovie: ISearchMovie = {
  adult: false,
  backdrop_path: '',
  belongs_to_collection: {
    backdrop_path: '',
    id: 1,
    name: '',
    poster_path: '',
  },
  budget: 1,
  genres: [
    { id: 1, name: '', }
  ],
  homepage: '',
  id: 1,
  imdb_id: '',
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 1,
  poster_path: '',
  production_companies: [
    {
      id: 1,
      logo_path: '',
      name: '',
      origin_country: '',
    }
  ],
  production_countries: [
    {
      iso_3166_1: '',
      name: '',
    }
  ],
  release_date: '',
  revenue: 1,
  runtime: 1,
  spoken_languages: [
    {
      english_name: '',
      iso_639_1: '',
      name: '',
    }
  ],
  status: '',
  tagline: '',
  title: '',
  video: false,
  vote_average: 1,
  vote_count: 1,
}



// interface for list-movie
export interface IListMovie {
  messageStatus: '',
  result: {
    actors: []
    countries: [
      { name: '',uuid: '', }
    ],
    createdAt: '',
    description: '',
    directors: [],
    embedUrls: [
      {
        server: '',
        url: '',
        priority: 1,
      }
    ],
    episodes: [],
    escritors: [],
    genres: [
      { name: '',uuid: '', }
    ],
    image: '',
    index: 1,
    otherTitles: []
    rating: '',
    release: '',
    title: '',
    titleOriginal: '',
    updatedAt: '',
    uuid: '',
    year: '',
    _id: '',
  },
  status: 1,
  success: false,
}



// interface for search-movies
export interface ISearchMovies {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '',
      genre_ids: []
      id: 1,
      original_language: '',
      original_title: '',
      overview: '',
      popularity: 1,
      poster_path: '',
      release_date: '',
      title: '',
      video: false,
      vote_average: 1,
      vote_count: 1,
    }
  ]
  total_page: 1,
  total_results: 1,
}