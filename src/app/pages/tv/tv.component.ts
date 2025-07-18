import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-tv',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tv.component.html'
})
export class TvComponent implements OnInit {
  tvId: string | null = null;
  series: any = {};




  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.tvId = this.route.snapshot.paramMap.get('id');
    this.loadSeriesData();
  }

  goBack() {
    this.router.navigate(['/tv']);
  }

  loadSeriesData() {
    // Simulando datos de series basados en el ID
    const tvSeries = {
      '1': {
        title: 'Stranger Things',
        tagline: 'Algo extraño está sucediendo.',
        firstAirDate: '2016',
        status: 'En producción',
        genres: 'Drama, Fantasía, Horror, Ciencia ficción',
        creator: 'Duffer Brothers',
        rating: '8.7',
        seasons: 4,
        episodes: 42,
        network: 'Netflix',
        overview: 'Cuando un niño desaparece, su madre, un jefe de policía y sus amigos deben enfrentar fuerzas terroríficas para rescatarlo. Ambientada en la década de 1980 en el pueblo ficticio de Hawkins, Indiana, la primera temporada se centra en la investigación de la desaparición de Will Byers en medio de eventos sobrenaturales que ocurren alrededor del pueblo.',
        cast: [
          { name: 'Millie Bobby Brown', character: 'Eleven' },
          { name: 'Finn Wolfhard', character: 'Mike Wheeler' },
          { name: 'Winona Ryder', character: 'Joyce Byers' },
          { name: 'David Harbour', character: 'Jim Hopper' }
        ]
      },
      '2': {
        title: 'The Crown',
        tagline: 'El poder tiene un precio.',
        firstAirDate: '2016',
        status: 'Finalizada',
        genres: 'Drama, Historia, Biografía',
        creator: 'Peter Morgan',
        rating: '8.6',
        seasons: 6,
        episodes: 60,
        network: 'Netflix',
        overview: 'Esta serie dramática histórica narra la vida de la Reina Elizabeth II desde la década de 1940 hasta los tiempos modernos. La serie comienza con el matrimonio de Elizabeth con Philip, Duque de Edimburgo, en 1947, y sigue los principales eventos políticos y personales de su reinado.',
        cast: [
          { name: 'Imelda Staunton', character: 'Queen Elizabeth II' },
          { name: 'Jonathan Pryce', character: 'Prince Philip' },
          { name: 'Lesley Manville', character: 'Princess Margaret' },
          { name: 'Dominic West', character: 'Prince Charles' }
        ]
      }
    };

    this.series = tvSeries[this.tvId as keyof typeof tvSeries] || tvSeries['1'];
  }
}
