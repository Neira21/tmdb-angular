import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { MoviesService } from '@app/shared/services/movies/movies.service';
import { MovieDetailInterface } from '@app/interfaces/movieInterface';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  // Variables to hold movie data
  movieId: string | null = null;
  movie: any = {};


  // Inject routes services
  router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);

  movieService = inject(MoviesService);


  ngOnInit() {

    this.movieId = this.route.snapshot.paramMap.get('id');

    // Fetch movie data using the service
    if (this.movieId) {
      this.movieService.getDataMovie(this.movieId).subscribe({
      next: (data: MovieDetailInterface) => {
        this.movie = data;
        console.log(this.movie);
      },
      error: (error) => {
        console.error('Error fetching movie:', error);
      }
      });
    }

  }

  goBack() {
    this.router.navigate(['/movies']);
  }



}
