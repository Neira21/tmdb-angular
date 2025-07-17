import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-slate-900 text-white">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold mb-8 text-center">Películas Populares</h1>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div *ngFor="let movie of movies" class="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div class="aspect-[2/3] bg-slate-700 flex items-center justify-center">
              <svg class="w-16 h-16 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z"></path>
              </svg>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-sm mb-2 line-clamp-2">{{ movie.title }}</h3>
              <p class="text-slate-400 text-xs">{{ movie.year }}</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-400 text-xs">★</span>
                <span class="text-slate-300 text-xs ml-1">{{ movie.rating }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-8">
          <nav class="flex space-x-2">
            <button class="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
              Anterior
            </button>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
            <button class="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">2</button>
            <button class="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">3</button>
            <button class="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
              Siguiente
            </button>
          </nav>
        </div>
      </div>
    </div>
  `
})
export class MovieListComponent {
  movies = [
    { id: 1, title: 'Avatar: The Way of Water', year: '2022', rating: '7.8' },
    { id: 2, title: 'Top Gun: Maverick', year: '2022', rating: '8.3' },
    { id: 3, title: 'Black Panther: Wakanda Forever', year: '2022', rating: '6.7' },
    { id: 4, title: 'Doctor Strange in the Multiverse of Madness', year: '2022', rating: '6.9' },
    { id: 5, title: 'Minions: The Rise of Gru', year: '2022', rating: '6.5' },
    { id: 6, title: 'Thor: Love and Thunder', year: '2022', rating: '6.2' },
    { id: 7, title: 'Jurassic World Dominion', year: '2022', rating: '5.6' },
    { id: 8, title: 'The Batman', year: '2022', rating: '7.8' },
    { id: 9, title: 'Morbius', year: '2022', rating: '5.2' },
    { id: 10, title: 'Sonic the Hedgehog 2', year: '2022', rating: '6.5' },
    { id: 11, title: 'Fantastic Beasts: The Secrets of Dumbledore', year: '2022', rating: '6.2' },
    { id: 12, title: 'The Northman', year: '2022', rating: '7.0' }
  ];
}
