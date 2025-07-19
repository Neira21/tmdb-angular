import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home1',
  standalone: true,
  imports: [],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css'
})
export class Home1Component {
  @Input() title = 'Buscar '

  // Ahora un output porque será del hijo home1.component.ts al padre home1
  @Output() search = new EventEmitter<string>();

  //Pero se debe lanzar en un metodo que estará en el padre home.component.ts
  // Tambien este metodo se usa en el template de home1.component.html (hijo)
  onSearch(query: string ): void {
    this.search.emit(query);
  }

  handleSubmit(e:Event, searchInput: HTMLInputElement): void {
    e.preventDefault();
    const query = searchInput.value || '';
    this.onSearch(query);
  }



}
