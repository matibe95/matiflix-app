import { Component, Input } from '@angular/core';
import { MovieCard } from './../../app/models/moviecard.model'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  // genero = 'Acción'
  // title = 'Spiderman'
  // description = 'Lorem ipsum...'
  // year = '2023'
  // director = 'Qsy'

  @Input() movie!: MovieCard
}
