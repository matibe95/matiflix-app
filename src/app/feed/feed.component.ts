import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieCard } from '../models/moviecard.model';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  http = inject(HttpClient)
  movies: MovieCard[] = [];
  url: string = 'assets/mocks/movies.json';

  ngOnInit(){
    this.http.get<MovieCard[]>(this.url)
    .subscribe((data)=> {
      console.log(data)
      this.movies = data
    })
  }
}
