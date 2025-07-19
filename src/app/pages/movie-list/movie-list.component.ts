import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesService } from '@app/shared/services/movies/movies.service';
import { MovieInterface } from '@app/interfaces/movieInterface';
import { environment } from '@environments/environment.development';
import { BasePaginationComponent } from '@app/shared/base/base-pagination.component';
import { PaginationComponent } from '@app/shared/ui/pagination/pagination.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginationComponent],
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent extends BasePaginationComponent implements OnInit {

  // Array to hold movie data
  movies: MovieInterface[] = []

  // import service movie
  movieService = inject(MoviesService);

  // Image URL from environment
  imageUrl = environment.imageUrl;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(page: number = 1): void {
    this.loading = true;
    this.movieService.getDataMovies(page).subscribe({
      next: (data) => {
        console.log(data);
        this.movies = data.results;
        this.updatePaginationData(data);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
}
