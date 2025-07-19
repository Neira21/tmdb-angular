import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { TvDetailInterface } from '@app/interfaces/tvInterface';
import { environment } from '@environments/environment.development';
import { DataService } from '@app/shared/services/data.service';
import { LoadingComponent } from '@app/components/loading/loading.component';

@Component({
  selector: 'app-tv',
  standalone: true,
  imports: [CommonModule, RouterModule, LoadingComponent],
  templateUrl: './tv.component.html',
})
export class TvComponent implements OnInit {
  tvId: string | null = null;
  serie: TvDetailInterface = {} as TvDetailInterface;

  loading: boolean = true;
  imageUrl = environment.imageUrl;

  router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);

  // inject service
  service = inject(DataService); // Assuming you have a TvService similar to MoviesService

  ngOnInit() {
    this.tvId = this.route.snapshot.paramMap.get('id');

    // Fetch TV series data using the service
    if (this.tvId) {
      this.service.getDataTv(this.tvId).subscribe({
        next: (data: TvDetailInterface) => {
          this.serie = data;
          this.loading = false;
          console.log('TV Series Data:', this.serie);
        },
        error: (error) => {
          this.loading = false;
          console.error('Error fetching TV series:', error);
        },
      });
    }
  }

  goBack() {
    this.router.navigate(['/tv']);
  }

  getGenresString(): string {
    return this.serie.genres?.map(genre => genre.name).join(', ') || '';
  }

  getNetworksString(): string {
    return this.serie.networks?.map(network => network.name).join(', ') || '';
  }

  getCompaniesString(): string {
    return this.serie.production_companies?.map(company => company.name).join(', ') || '';
  }
}
