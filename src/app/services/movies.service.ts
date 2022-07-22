import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }

  getMovies(){
    return this.http.get("https://api.themoviedb.org/3/movie/550?api_key=9eca73c3b36be8b2112b169e0fa3696b")
  }
}
