import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieCard} from './../models/moviecard.model'

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {
  @Input() movie!: MovieCard

  prueba: any
  url: string = 'assets/mocks/movies.json';
  http = inject(HttpClient)
  movieTitle!: string
  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.movieTitle = params['movie'];
        this.searchMovieByTitle()
    });
  }
  searchMovieByTitle(){
    this.http.get<MovieCard[]>(this.url)
    .subscribe((data)=> {
      this.prueba = data.find(movie => movie.Title === this.movieTitle)
      if (this.prueba !== undefined){
        this.movie = this.prueba
      }
    })
  }
}
