import { Injectable } from '@angular/core';

export abstract class BasePaginationComponent {
  // Pagination properties
  currentPage: number = 1;
  totalPages: number = 1;
  totalResults: number = 0;
  loading: boolean = false;

  // Abstract method that must be implemented by child components
  abstract loadData(page: number): void;

  // Navigation methods
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.loadData(page);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadData(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.loadData(this.currentPage - 1);
    }
  }

  // Common pagination data update
  updatePaginationData(data: any): void {
    this.currentPage = data.page;
    this.totalPages = data.total_pages;
    this.totalResults = data.total_results;
    this.loading = false;

    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  handleError(error: any): void {
    console.error('Error fetching data:', error);
    this.loading = false;
  }
}
