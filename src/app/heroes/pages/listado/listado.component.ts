import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  constructor(private heoresService: HeroesService) { }

  heroes: Heroe[] = [];

  ngOnInit(): void {
    this.heoresService.getHeroes()
      .subscribe( resp => {
        this.heroes = resp;
      });
  }

}
