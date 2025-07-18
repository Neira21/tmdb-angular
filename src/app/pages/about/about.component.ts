import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  features = [
    'Navegación intuitiva y responsiva',
    'Componentes standalone de Angular 18',
    'Diseño moderno con Tailwind CSS',
    'Lazy loading para mejor rendimiento',
    'Estructura de proyecto escalable',
    'TypeScript para desarrollo type-safe'
  ];

  technologies = [
    'Angular 18.2.0',
    'TypeScript 5.5.2',
    'Tailwind CSS 3.x',
    'RxJS para programación reactiva',
    'Angular Router para navegación',
    'Vite para desarrollo y build'
  ];

  stats = [
    { number: '6', label: 'Componentes Creados' },
    { number: '100%', label: 'Cobertura TypeScript' },
    { number: '6', label: 'Rutas Configuradas' }
  ];
}
