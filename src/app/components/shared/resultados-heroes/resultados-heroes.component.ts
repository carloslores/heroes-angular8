import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../../servicios/heroes.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-resultados-heroes',
  templateUrl: './resultados-heroes.component.html',
  styleUrls: ['./resultados-heroes.component.sass']
})
export class ResultadosHeroesComponent implements OnInit {
      heroes:any[] = []; 
      termino:string;

      constructor(private activateRoute: ActivatedRoute,
                  private _heroesService: HeroesService){ 
             
  }

  ngOnInit() {
    this.activateRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log(this.heroes)
    })
  }
 
}
