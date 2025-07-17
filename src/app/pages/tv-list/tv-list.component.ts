import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-slate-900 text-white">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold mb-8 text-center">Series de Televisión</h1>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div *ngFor="let show of tvShows" class="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div class="aspect-[2/3] bg-slate-700 flex items-center justify-center">
              <svg class="w-16 h-16 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-sm mb-2 line-clamp-2">{{ show.name }}</h3>
              <p class="text-slate-400 text-xs">{{ show.year }}</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-400 text-xs">★</span>
                <span class="text-slate-300 text-xs ml-1">{{ show.rating }}</span>
              </div>
              <p class="text-slate-500 text-xs mt-1">{{ show.seasons }} temporadas</p>
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
export class TvListComponent {
  tvShows = [
    { id: 1, name: 'Stranger Things', year: '2016', rating: '8.7', seasons: 4 },
    { id: 2, name: 'The Crown', year: '2016', rating: '8.6', seasons: 6 },
    { id: 3, name: 'Wednesday', year: '2022', rating: '8.1', seasons: 1 },
    { id: 4, name: 'House of the Dragon', year: '2022', rating: '8.5', seasons: 1 },
    { id: 5, name: 'The Boys', year: '2019', rating: '8.7', seasons: 3 },
    { id: 6, name: 'Euphoria', year: '2019', rating: '8.4', seasons: 2 },
    { id: 7, name: 'The Witcher', year: '2019', rating: '8.2', seasons: 3 },
    { id: 8, name: 'Ozark', year: '2017', rating: '8.4', seasons: 4 },
    { id: 9, name: 'Better Call Saul', year: '2015', rating: '8.9', seasons: 6 },
    { id: 10, name: 'The Umbrella Academy', year: '2019', rating: '7.9', seasons: 3 },
    { id: 11, name: 'Squid Game', year: '2021', rating: '8.0', seasons: 1 },
    { id: 12, name: 'The Mandalorian', year: '2019', rating: '8.7', seasons: 3 }
  ];
}
