import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { DataService } from '@app/shared/services/data.service';
import { MovieDetailInterface, MovieInterface } from '@app/interfaces/movieInterface';
import { environment } from '@environments/environment.development';
import { TvDetailInterface } from '@app/interfaces/tvInterface';
import { LoadingComponent } from '@app/components/loading/loading.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, RouterModule, LoadingComponent],
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  // Variables to hold movie data
  movieId: string | null = null;
  movie: MovieDetailInterface = { } as MovieDetailInterface;

  loading: boolean = true;

  // Inject routes services
  router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);

  //Inject service
  movieService = inject(DataService);

  // Image URL from environment
  imageUrl = environment.imageUrl;

  /*
  id: 0,
    title: '',
    overview: '',
    release_date: '',
    poster_path: '',
    backdrop_path: '',
    vote_average: 0,
    vote_count: 0,
    genres: [],
    runtime: 0,
    director: '',
    budget: 0,
    revenue: 0,
    video: false,
    original_language: '',
    original_title: '',
    belongs_to_collection: undefined,
    homepage: '',
    imdb_id: '',
    adult: false,
    popularity: 0,
    rating: 0,
    tagline: '',
    language: ''
  */

  ngOnInit() {

    this.movieId = this.route.snapshot.paramMap.get('id');

    // Fetch movie data using the service
    if (this.movieId) {
      this.movieService.getDataMovie(this.movieId).subscribe({
      next: (data: MovieDetailInterface) => {
        this.loading = false;
        this.movie = data;
        console.log("aca", this.movie);
      },
      error: (error) => {
        this.loading = false;
        console.error('Error fetching movie:', error);
      }
      });
    }

  }

  goBack() {
    this.router.navigate(['/movies']);
  }

  getGenresString(): string {
    return this.movie.genres?.map(genre => genre.name).join(', ') || '';
  }

  getCompaniesString(): string {
    return this.movie.production_companies?.map(company => company.name).join(', ') || '';
  }

  getCountriesString(): string {
    return this.movie.production_countries?.map(country => country.name).join(', ') || '';
  }



}
