import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovies } from 'src/app/models/models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  movies: IMovies
  page = 1
  limit = 15
  isLoader = true
  aSub: Subscription

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.aSub = this.apiService.getMovies(this.page, this.limit).subscribe((res) => {
      this.movies = res
      this.isLoader = false
    })
    this.show()
  }
  
  showMore(){
    this.page++
    this.aSub = this.apiService.getMovies(this.page, this.limit).subscribe((res) => {
      this.movies.results = this.movies.results.concat(res.results)
    })
  }

  show(){
    var callback = (entries) => {
      if(entries[0].isIntersecting) {
        this.showMore()
      }
    }
    var observer = new IntersectionObserver(callback)
    var target = document.querySelector('#show')
    observer.observe(target);
  }

  ngOnDestroy(): void {
    this.aSub.unsubscribe()
  }
  
}