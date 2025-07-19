# TmdbAngular

#### **Explicación**

- **Tipado de datos en la carpeta interfaces: Define las interfaces para los datos que maneja la aplicación, como películas, series**.
  1. mediaBase: Se define los datos de la respuesta de películas o series.
  2. movieInterface y tvInterface: Se definen las interfaces específicas para películas y series, extendiendo de mediaBase.
  3. En responseInterface se define la estructura de la respuesta de la API, incluyendo los resultados y la información de paginación y de forma genérica para las películas y series.

- **Componentes de página: Cada página de la aplicación (como películas, series, detalles) tiene su propio componente que maneja la lógica y la presentación de esa sección específica.**
  1. movie-list: Muestra una lista de películas.
  2. tv-list: Muestra la lista de series.
  3. movie: Muestra los detalles de una película específica.
  4. tv: Muestra los detalles de una serie específica.

- **shared: Contiene componentes, servicios reutilizables en toda la aplicación.**

  1. base-pagination: Métodos para manejar la paginación de resultados.
  2. Ui: Contiene componentes para el footer, Navbar que se verán en todas las páginas
  3. services: Servicios para manejar la lógica de negocio, como la obtención de datos de películas y series, usuarios, etc.

- **AppComponent: Componente raíz de la aplicación.**
```html
  <app-navbar></app-navbar>
  <div>
    <router-outlet></router-outlet>
  </div>
  <app-footer></app-footer>
```

- **AppRoutingModule: Configuración de las rutas de la aplicación.**
```typescript
  export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'movies',
    loadComponent: () => import('./pages/movie-list/movie-list.component').then(m => m.MovieListComponent)
  },
  {
    path: 'movies/:id',
    loadComponent: () => import('./pages/movie/movie.component').then(m => m.MovieComponent)
  },
  {
    path: 'tv',
    loadComponent: () => import('./pages/tv-list/tv-list.component').then(m => m.TvListComponent)
  },
  {
    path: 'tv/:id',
    loadComponent: () => import('./pages/tv/tv.component').then(m => m.TvComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  }
];
```

- Explicación de los servicios

 1 **data.service:** Maneja la obtención de datos de películas y series desde la API de TMDB.
Inserto las variables de entorno para la URL base y la clave de API.
También el manejo de HttpClient para realizar las peticiones a la API.

```typescript
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
http = inject(HttpClient);
```

Ejemplo de un método para obtener películas:
Uso el ResponseInterface para tipar la respuesta y uso MovieInterface para usar el genérico de películas. (Se puede usar movieInterface o tvInterface según el caso).

```typescript
getDataMovies(page: number = 1) {
    return this.http.get<ResponseInterface<MovieInterface>>(
      `${this.apiUrl}discover/movie?api_key=${this.apiKey}&page=${page}`
    );
  }
```

2. **movie-list.component.ts** LLamo al servicio en el componente de la lista de películas

```typescript
ngOnInit(): void {
    this.loadData();
  }

  loadData(page: number = 1): void {
    this.loading = true;
    this.movieService.getDataMovies(page).subscribe({
      next: (data) => {
        this.movies = data.results;
        // cuando cargue la data inicial, pasarle los datos al metodo de actualización de paginación
        this.updatePaginationData(data);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }
  ```




