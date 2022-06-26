import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs'

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
      ],
      providers: [ApiService],
    })
    const spyHttp = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
    apiService = new ApiService(spyHttp);;
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should have searchMovies function', () => {
    expect(apiService.searchMovies).toBeTruthy();
  });

  it('should have getMovieList function', () => {
    expect(apiService.getMovieList).toBeTruthy();
  });

  it('should have getMovieSearch function', () => {
    expect(apiService.getMovieSearch).toBeTruthy();
  });

  it('should have getMovies function', () => {
    expect(apiService.getMovies).toBeTruthy();
  });
});