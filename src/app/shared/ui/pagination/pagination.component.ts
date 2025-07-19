import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() totalResults: number = 0;
  @Input() loading: boolean = false;
  @Input() itemType: string = 'elementos'; // 'películas' o 'series'

  @Output() pageChange = new EventEmitter<number>();
  @Output() nextPageEvent = new EventEmitter<void>();
  @Output() previousPageEvent = new EventEmitter<void>();

  goToPage(page: number): void {
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
    const end = Math.min(this.totalPages, this.currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }
}
