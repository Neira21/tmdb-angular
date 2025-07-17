import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'movies',
    loadComponent: () => import('./pages/movie-list/movie-list.component').then(m => m.MovieListComponent)
  },
  {
    path: 'movies/:id',
    loadComponent: () => import('./pages/movie/movie.component').then(m => m.MovieComponent)
  },
  {
    path: 'tv',
    loadComponent: () => import('./pages/tv-list/tv-list.component').then(m => m.TvListComponent)
  },
  {
    path: 'tv/:id',
    loadComponent: () => import('./pages/tv/tv.component').then(m => m.TvComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  }
];
