import { Component, inject } from '@angular/core';
import { MovieInterface } from '@app/interfaces/movieInterface';
import { DataService } from '@app/shared/services/data.service';
import { environment } from '@environments/environment.development';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styles: ``
})
export class FavoritesComponent {
  favorites: MovieInterface[] = [];
  loading: boolean = true;
  error: string | null = null;

  data = inject(DataService);


  imageUrl = environment.imageUrl;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadFavorites();

  }

  loadFavorites() {
    this.data.getFavorites().subscribe({
      next: (response) => {

        console.log(response);
        this.favorites = response.results;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      }
    });
  }


  deleteFavorite(id: number, favorite: boolean) {
    this.data.postFavorite(id, favorite).subscribe({
      next: (response) => {
        console.log(response);
        this.favorites = this.favorites.filter(movie => movie.id !== id);
      },
      error: (error) => {
        console.error('Error deleting favorite:', error);
        // Optionally, you can show an error message to the user
      }
    });
  }

}
