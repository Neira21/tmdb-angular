import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TvInterface } from '@app/interfaces/tvInterface';
import { MoviesService } from '@app/shared/services/movies/movies.service';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tv-list.component.html'
})
export class TvListComponent {
  tvSeries: TvInterface[] = []

  // import service movie
  movieService = inject(MoviesService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.movieService.getDataTvs().subscribe({
      next: (data) => {
        console.log(data);
        // Filter results to only include TvInterface items (those with a 'title' property)
        this.tvSeries = data.results;
      },
      error: (error) => {
        console.error('Error fetching TV series:', error);
      }
    })
  }



}
