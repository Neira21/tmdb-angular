import { MovieInterface } from "@app/interfaces/movieInterface";
import { ResponseInterface } from "@app/interfaces/responseInterface";
import { TvInterface } from "@app/interfaces/tvInterface";

export abstract class BasePaginationComponent {
  // Pagination properties
  currentPage: number = 1;
  totalPages: number = 1;
  datosTotales: number = 0;

  // se usa loading to indicate if data is being fetched



  // Abstract method that must be implemented by child components

  // El componente hijo debe implementar este método para cargar los datos, es por eso que tiene abstract
  abstract loadData(page: number): void;

  // Navigation methods
  goToPage1(page: number): void {
    // Este método se usa para ir a una página específica
    // Ejemplo si page es 2, es mayor a 1 y menor o igual a totalPages y 2 es diferente a currentPage que es 1
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      // se llama al método loadData con la página seleccionada pero con página distinta a currentPage en este case el numero 2
      this.loadData(page);
    }
  }

  nextPage(): void {
    // si el currentPage es 2 y totalPages es 5, entonces se llama al método loadData con la página 3
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
  updatePaginationData(data: ResponseInterface<MovieInterface | TvInterface>): void {
    // aca se actualizan los datos segun la respuesta del servicio
    this.currentPage = data.page;
    this.totalPages = data.total_pages;
    this.datosTotales = data.total_results;


    // Scroll to top when page changes
    // para ir a la parte superior de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  handleError(error: Error): void {
    console.error('Error fetching data:', error);

  }
}
