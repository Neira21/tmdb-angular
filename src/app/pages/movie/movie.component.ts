import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-slate-900 text-white">
      <div class="container mx-auto px-4 py-8">
        <!-- Back Button -->
        <button routerLink="/movies" class="mb-6 flex items-center text-blue-400 hover:text-blue-300 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Volver a películas
        </button>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Movie Poster -->
          <div class="md:col-span-1">
            <div class="aspect-[2/3] bg-slate-800 rounded-lg flex items-center justify-center">
              <svg class="w-24 h-24 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z"></path>
              </svg>
            </div>
          </div>

          <!-- Movie Details -->
          <div class="md:col-span-2">
            <h1 class="text-4xl font-bold mb-4">{{ movie.title }}</h1>
            <div class="flex items-center space-x-4 mb-6">
              <span class="bg-blue-600 px-3 py-1 rounded-full text-sm">{{ movie.year }}</span>
              <span class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                {{ movie.rating }}/10
              </span>
              <span class="text-slate-400">{{ movie.duration }}</span>
            </div>

            <div class="space-y-4">
              <div>
                <h3 class="text-xl font-semibold mb-2">Sinopsis</h3>
                <p class="text-slate-300 leading-relaxed">{{ movie.overview }}</p>
              </div>

              <div>
                <h3 class="text-xl font-semibold mb-2">Géneros</h3>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let genre of movie.genres" class="bg-slate-700 px-3 py-1 rounded-full text-sm">
                    {{ genre }}
                  </span>
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-semibold text-slate-300">Director</h4>
                  <p>{{ movie.director }}</p>
                </div>
                <div>
                  <h4 class="font-semibold text-slate-300">Fecha de estreno</h4>
                  <p>{{ movie.releaseDate }}</p>
                </div>
              </div>
            </div>

            <div class="mt-8 flex space-x-4">
              <button class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                Ver Trailer
              </button>
              <button class="border border-slate-600 hover:border-slate-400 px-6 py-3 rounded-lg font-semibold transition-colors">
                Añadir a Lista
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class MovieComponent {
  movie = {
    title: 'Avatar: The Way of Water',
    year: '2022',
    rating: '7.8',
    duration: '3h 12m',
    overview: 'Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
    genres: ['Ciencia ficción', 'Aventura', 'Acción'],
    director: 'James Cameron',
    releaseDate: '16 de diciembre, 2022'
  };
}
