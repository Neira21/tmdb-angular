import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-slate-900 text-white">
      <div class="container mx-auto px-4 py-8">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold mb-8 text-center">Acerca de TMDB Movies</h1>

          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="space-y-6">
              <div>
                <h2 class="text-2xl font-semibold mb-4 text-blue-400">Nuestra Misión</h2>
                <p class="text-slate-300 leading-relaxed">
                  TMDB Movies es tu destino definitivo para descubrir las mejores películas y series de televisión.
                  Nos dedicamos a proporcionar información actualizada y completa sobre el mundo del entretenimiento.
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-semibold mb-4 text-purple-400">¿Qué Ofrecemos?</h2>
                <ul class="space-y-2 text-slate-300">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    Catálogo completo de películas y series
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    Información detallada y actualizada
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    Recomendaciones personalizadas
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    Búsqueda avanzada y filtros
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-slate-800 p-6 rounded-lg">
              <h2 class="text-2xl font-semibold mb-4 text-yellow-400">Estadísticas</h2>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-slate-300">Películas en catálogo</span>
                  <span class="text-2xl font-bold text-blue-400">50,000+</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-300">Series de TV</span>
                  <span class="text-2xl font-bold text-purple-400">15,000+</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-300">Usuarios activos</span>
                  <span class="text-2xl font-bold text-green-400">1M+</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-300">Países disponibles</span>
                  <span class="text-2xl font-bold text-yellow-400">190+</span>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <h2 class="text-2xl font-semibold mb-4">Tecnología</h2>
            <p class="text-slate-300 mb-6">
              Desarrollado con las últimas tecnologías web para ofrecerte la mejor experiencia
            </p>
            <div class="flex justify-center space-x-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span class="text-white font-bold text-lg">A</span>
                </div>
                <span class="text-sm text-slate-400">Angular</span>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span class="text-white font-bold text-lg">TS</span>
                </div>
                <span class="text-sm text-slate-400">TypeScript</span>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span class="text-white font-bold text-lg">TW</span>
                </div>
                <span class="text-sm text-slate-400">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {
}
