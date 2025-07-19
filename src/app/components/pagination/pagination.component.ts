import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {

  // Como lo usaré en movieListComponent y tvListComponent
  // Desde ahi le paso los datos de paginación
  // Le paso el currentPage, totalPages, totalResults, loading y itemType

 // asi que estos son inputs porque los datos vienen desde el componente padre, sond datos que está en el padre en la basePaginationComponent.ts

 /*
    <app-pagination
      [currentPage]="currentPage"
      [totalPages]="totalPages"
      [totalResults]="totalResults"
      [loading]="loading"
      [itemType]="'películas'"
    </app-pagination>
 */



  @Input() currentPage: number = 1;
  @Input() totalPagesAA: number = 1;
  @Input() totalResults: number = 0;
  //@Input() loading: boolean = false;
  @Input() itemType1: string = 'elementos'; // 'películas' o 'series'

  // Luego son outputs porque los datos son emitidos hacia el componente padre
  // En el padre en el html donde se usa el hijo tiene que haber esos eventos dentro de paréntesis y deben estar vinculado a mtododos que están en el padre que son gotoPage, nextPage y previousPage
  // el pageChange en el hijo debe estar con su output e igualarlos con el newEmitter el pageChange tiene to be an EventEmitter<number>() porque se va a emitir un número desde el html de pagination
  // Por ejemplo:
  /*
    <app-pagination
      (pageChange)="goToPage($event)"
      (nextPageEvent)="nextPage()"
      (previousPageEvent)="previousPage()"
    </app-pagination>
  */

  //Esos metodos de gotopage deben estar en el padre y en el hijo deben hacer que el evento se emita hacia el padre usando this.pageChange.emit(page);



  @Output() pageChange = new EventEmitter<number>();
  @Output() nextPageEvent = new EventEmitter<void>();
  @Output() previousPageEvent = new EventEmitter<void>();

  // Los nombres de los métodos serán usados en el html del componente padre

  goToPage1(page: number): void {
    this.pageChange.emit(page);
  }

  nextPage(): void {
    this.nextPageEvent.emit();
  }

  previousPage(): void {
    this.previousPageEvent.emit();
  }

  // Get visible page numbers for pagination
  getVisiblePages(): number[] {
    const pages: number[] = [];
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPagesAA, this.currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }
}
