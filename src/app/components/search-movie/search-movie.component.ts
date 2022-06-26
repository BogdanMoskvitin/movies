import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ISearchMovie } from 'src/app/models/models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit, OnDestroy {

  idMovie
  movie: ISearchMovie
  isLoader = true
  aSub: Subscription

  constructor( 
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
  ) {
    this.idMovie = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.aSub = this.apiService.getMovieSearch(this.idMovie).subscribe((res) => {
      this.movie = res
      this.isLoader = false
    })
  }

  ngOnDestroy(): void {
    this.aSub.unsubscribe()
  }
}