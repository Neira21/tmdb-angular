import { ResponseInterface } from '@app/interfaces/responseInterface';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  MovieDetailInterface,
  MovieInterface,
} from '@app/interfaces/movieInterface';
import { environment } from '@environments/environment.development';
import { TvInterface, TvDetailInterface } from '@app/interfaces/tvInterface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  private accountId = environment.accountId; // Assuming you have a session ID in your environment
  private token = environment.token; // Assuming you have a token in your environment

  http = inject(HttpClient);

  constructor() {}

  getDataMovies(page: number = 1) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', page.toString());

    return this.http.get<ResponseInterface<MovieInterface>>(
      // with trailer append_to_response: "videos"
      `${this.apiUrl}discover/movie?${params.toString()}`
    );
  }

  getDataMovie = (id: string) => {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('append_to_response', 'videos'); // Append videos to the response

    return this.http.get<MovieDetailInterface>(
      `${this.apiUrl}movie/${id}?${params.toString()}`
    );
  };

  getDataTvs = (page: number = 1) => {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', page.toString());

    return this.http.get<ResponseInterface<TvInterface>>(
      `${this.apiUrl}discover/tv?${params.toString()}`
    );
  };

  getDataTv = (id: string) => {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('append_to_response', 'videos'); // Append videos to the response

    return this.http.get<TvDetailInterface>(
      `${this.apiUrl}tv/${id}?${params.toString()}`
    );
  };

  getFavorites = () => {
    const params = new HttpParams().set('api_key', this.apiKey);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<ResponseInterface<MovieInterface>>(
      `${this.apiUrl}account/${this.accountId}/favorite/movies?`,
      { headers, params }
    );
  };

  postFavorite = (id: number, favorite: boolean) => {
    const body = {
      media_type: 'movie',
      media_id: id,
      favorite: favorite,
    };

    const params = new HttpParams().set('api_key', this.apiKey);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post(
      `${this.apiUrl}account/${this.accountId}/favorite`,
      body,
      { headers, params }
    );
  };
}

