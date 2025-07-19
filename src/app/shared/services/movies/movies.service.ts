import { ResponseInterface } from '@app/interfaces/responseInterface';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MovieDetailInterface, MovieInterface } from '@app/interfaces/movieInterface';
import { environment } from '@environments/environment.development';
import { TvInterface, TvDetailInterface } from '@app/interfaces/tvInterface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  http = inject(HttpClient);

  constructor() { }

  getDataMovies(page: number = 1) {
    return this.http.get<ResponseInterface<MovieInterface>>(
      `${this.apiUrl}discover/movie?api_key=${this.apiKey}&page=${page}`
    );
  }

  getDataMovie = (id: string) => {
    return this.http.get<MovieDetailInterface>(`${this.apiUrl}movie/${id}?api_key=${this.apiKey}`)
  }

  getDataTvs = (page: number = 1) => {
    return this.http.get<ResponseInterface<TvInterface>>(`${this.apiUrl}discover/tv?api_key=${this.apiKey}&page=${page}`)
  }

  getDataTv = (id:string) => {
    return this.http.get<TvDetailInterface>(`${this.apiUrl}tv/${id}?api_key=${this.apiKey}`)
  }

}
