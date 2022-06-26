import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IListMovie } from 'src/app/models/models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit, OnDestroy {

  idMovie
  movie: IListMovie
  isLoader = true
  aSub: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
  ) {
    this.idMovie = this.activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.aSub = this.apiService.getMovieList(this.idMovie).subscribe((res) => {
      this.movie = res
      this.isLoader = false
    })
  }

  ngOnDestroy(): void {
    this.aSub.unsubscribe()
  }
}