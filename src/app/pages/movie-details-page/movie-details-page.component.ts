import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  imports: [],
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss'
})
export class MovieDetailsPageComponent {
  movie!: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const movieId = Number(params.get('id'));
      this.movieService.getMovieDetails(movieId).subscribe((data) => {
        this.movie = data;
      });
    });
  }
}
