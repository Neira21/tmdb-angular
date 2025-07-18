import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesService } from '@app/shared/services/movies/movies.service';
import { MovieInterface } from '@app/interfaces/movieInterface';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent {


  movies: MovieInterface[] = []

  // import service movie
  movieService = inject(MoviesService);

  ngOnInit(): void {
    this.movieService.getDataMovies().subscribe({
      next: (data) => {
        console.log(data);
        // Filter results to only include MovieInterface items (those with a 'title' property)
        this.movies = data.results;
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      }
    });
  }



}
