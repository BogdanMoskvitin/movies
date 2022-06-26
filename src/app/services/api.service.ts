import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { XRapidAPI } from "../models/constants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiSearch = environment.apiUrlSearch
  apiList = environment.apiUrlList

  constructor(private http: HttpClient) {}

  searchMovies(event): Observable<any> {
    return this.http.get(
      this.apiSearch + `/search/movie?query=${event.target.value}&page=1`, 
      {headers: {
        "X-RapidAPI-Key": XRapidAPI.key,
        "X-RapidAPI-Host": XRapidAPI.hostSearch
      }}
    )
  }

  getMovieList(id): Observable<any> {
    return this.http.get(
      this.apiList + `/api/movie/${id}`, 
      {headers: {
        'X-RapidAPI-Key': XRapidAPI.key,
        'X-RapidAPI-Host': XRapidAPI.hostList
      }}
    )
  }

  getMovieSearch(id): Observable<any> {
    return this.http.get(
      this.apiSearch + `/movies/getdetails?movie_id=${id}`, 
      {headers: {
        "X-RapidAPI-Key": XRapidAPI.key,
		    "X-RapidAPI-Host": XRapidAPI.hostSearch
      }}
    )
  }

  getMovies(page, limit): Observable<any> {
    return this.http.get(
      this.apiList + `/api/movies?page=${page}&limit=${limit}`, 
      {headers: {
        "X-RapidAPI-Key": XRapidAPI.key,
        "X-RapidAPI-Host": XRapidAPI.hostList
      }}
    )
  }
}