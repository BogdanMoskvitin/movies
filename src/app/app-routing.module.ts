import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: ListMovieComponent },
  { path: 'movie-detail/:id', component: SearchMovieComponent },
  { path: '**', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
