import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { HeroesService } from './servicios/heroes.service';

//Componenentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { HeroesComponent } from './components/shared/heroes/heroes.component';
import { AboutComponent } from './components/shared/about/about.component';
import { from } from 'rxjs';
import { HeroeComponent } from './components/shared/heroe/heroe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING 
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
