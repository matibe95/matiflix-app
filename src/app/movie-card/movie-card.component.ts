import { Component, Input } from '@angular/core';
import { MovieCard } from './../../app/models/moviecard.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input() movie!: MovieCard

  constructor(private _router: Router){}

  onShowMovieDetails(){
    const { Title } = this.movie
    this._router.navigate([`movie/${Title}`])
  }
}
