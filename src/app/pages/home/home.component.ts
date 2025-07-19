import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from '../home1/home1.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Home1Component],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  title: string = 'TMDB Angular App';

  onSearch(query: string): void {
    console.log('Search query from Home1Component:', query);
    this.title = query || '';
    // Aquí puedes manejar la búsqueda, por ejemplo, redirigir a una página de resultados
  }

}
