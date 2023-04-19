import {Component, OnInit} from '@angular/core';
import {StarWarsApiService} from "../star-wars-api.service";
import {Response} from "../types/response";
import {Movie} from "../types/movie";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies$!: Observable<Movie[]>;

  constructor(private readonly api: StarWarsApiService) {
  }

  ngOnInit(): void {
    this.movies$ = this.api.getMovies().pipe(
      map((response: Response<Movie>) => response.results)
    );
  }
}
