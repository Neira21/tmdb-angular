import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TvInterface } from '@app/interfaces/tvInterface';
import { MoviesService } from '@app/shared/services/movies/movies.service';
import { environment } from '@environments/environment.development';
import { BasePaginationComponent } from '@app/shared/base/base-pagination.component';
import { PaginationComponent } from '@app/shared/ui/pagination/pagination.component';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginationComponent],
  templateUrl: './tv-list.component.html'
})
export class TvListComponent extends BasePaginationComponent implements OnInit {
  tvSeries: TvInterface[] = []

  // import service movie
  movieService = inject(MoviesService);

  // Image URL from environment
  imageUrl = environment.imageUrl;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(page: number = 1): void {
    this.loading = true;
    this.movieService.getDataTvs(page).subscribe({
      next: (data) => {
        console.log(data.results);
        this.tvSeries = data.results;
        this.updatePaginationData(data);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
}
