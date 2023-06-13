import { Rating } from "./rating.models"

export interface MovieCard {
  // Id: number;
  Title: string
  Year: number
  Rated: string
  Genre: string
  Director: string
  Poster: string
  Plot: string
  Ratings: any
  Country?: string
  Awards?: string
  Actors?: string
  Production?: string
  // Production?: string
  
  // description: string
  // genero: string
  // image: string
  // director: string
  // year: string
}