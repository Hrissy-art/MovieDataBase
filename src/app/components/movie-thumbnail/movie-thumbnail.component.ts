import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './movie-thumbnail.component.html',
  styleUrl: './movie-thumbnail.component.scss'
})
export class MovieThumbnailComponent {
  @Input() movie!: Movie;
  @Input() isFavorite: boolean = false;
  @Output() toggleFavorite = new EventEmitter<void>();

  private router: Router = inject(Router);
  private movieService: MovieService = inject(MovieService);

  ngOnInit() {
    this.isFavorite = this.movieService.isFavorite(this.movie.id);
  }

  onToggleFavorite() {
    this.toggleFavorite.emit();
  }

  navigateToDetails() {
    this.router.navigate(['/movie-details', this.movie.id]);
  }
}
