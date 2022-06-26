import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ISearchMovies } from 'src/app/models/models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  myControl = new FormControl('')
  movies: ISearchMovies
  isTimerMovies = true
  aSub: Subscription

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() { }

  inputMovie(event){
      if(this.isTimerMovies == true){
          this.isTimerMovies = false
          let interval = setInterval(()=>{
              this.isTimerMovies = true
              this.aSub = this.apiService.searchMovies(event).subscribe((res) => {
                this.movies = res
              })
              clearTimeout(interval)
          }, 1000)
      }
  }

  openMovie(id) {
    this.router.navigate(['../movie-detail', id]).then(() => {
      this.myControl.setValue('');
    })
  }

  ngOnDestroy(): void {
    if(this.aSub){
      this.aSub.unsubscribe()
    }
  }
}