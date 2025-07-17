import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-slate-900 text-white">
      <div class="container mx-auto px-4 py-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Bienvenido a TMDB Movies
          </h1>
          <p class="text-xl text-slate-300 mb-8">
            Descubre las mejores películas y series del momento con nuestro catálogo actualizado.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div class="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="text-blue-400 mb-4">
                <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Películas Populares</h3>
              <p class="text-slate-400">Explora las películas más populares del momento</p>
            </div>
            <div class="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="text-purple-400 mb-4">
                <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Series TV</h3>
              <p class="text-slate-400">Descubre las mejores series de televisión</p>
            </div>
            <div class="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="text-green-400 mb-4">
                <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Búsqueda Avanzada</h3>
              <p class="text-slate-400">Encuentra exactamente lo que estás buscando</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {
}
