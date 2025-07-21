import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
