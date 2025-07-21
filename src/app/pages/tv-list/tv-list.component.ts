import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TvInterface } from '@app/interfaces/tvInterface';
import { DataService } from '@app/shared/services/data.service';
import { environment } from '@environments/environment.development';
import { BasePaginationComponent } from '@app/shared/base/base-pagination.component';
import { PaginationComponent } from '@app/components/pagination/pagination.component';
import { LoadingComponent } from '@app/components/loading/loading.component';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginationComponent, LoadingComponent],
  templateUrl: './tv-list.component.html'
})
export class TvListComponent extends BasePaginationComponent implements OnInit {
  tvSeries: TvInterface[] = []

  // import service movie
  movieService = inject(DataService);

  loading: boolean = true; // ✅ Mostrar loading al inicio

  // Image URL from environment
  imageUrl = environment.imageUrl;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(page: number = 1): void {
    this.loading = true; // ✅ Mostrar loading cada vez que cambie de página
    this.movieService.getDataTvs(page).subscribe({
      next: (data) => {
        console.log(data.results);
        this.tvSeries = data.results;
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
