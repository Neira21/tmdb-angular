import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '@app/shared/services/data.service';
import { MovieInterface } from '@app/interfaces/movieInterface';
import { environment } from '@environments/environment.development';
import { BasePaginationComponent } from '@app/shared/base/base-pagination.component';
import { PaginationComponent } from '@app/components/pagination/pagination.component';
import { LoadingComponent } from '@app/components/loading/loading.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginationComponent, LoadingComponent],
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent extends BasePaginationComponent implements OnInit {

  // Array to hold movie data
  movies: MovieInterface[] = []

  // import service movie
  movieService = inject(DataService);

  loading: boolean = true;

  // Image URL from environment
  imageUrl = environment.imageUrl;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(page: number = 1): void {
    this.loading = true; // ✅ Mostrar loading cada vez que cambie de página

    this.movieService.getDataMovies(page).subscribe({
      next: (data) => {
        console.log(data);
        this.movies = data.results;
        // cuando cargue la data inicial, pasarle los datos al metodo de actualización de paginación
        this.updatePaginationData(data);
        this.loading = false; // ✅ Ocultar loading cuando termine
      },
      error: (error) => {
        this.handleError(error);
        this.loading = false; // ✅ Ocultar loading también en caso de error
      }
    });
  }
}
