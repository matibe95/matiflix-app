import { Component, Input } from '@angular/core';
import { Rating } from '../models/rating.models';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent {
  @Input() rating!: Rating
}
