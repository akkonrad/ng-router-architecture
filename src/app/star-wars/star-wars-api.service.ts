import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "./types/movie";
import {Response} from "./types/response";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StarWarsApiService {

  constructor(private readonly http: HttpClient) { }

  getMovies(): Observable<Response<Movie>> {
    return this.http.get('https://swapi.dev/api/films/?format=json') as Observable<Response<Movie>>;
  }
}
