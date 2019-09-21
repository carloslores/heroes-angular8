import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  termino:string = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe( termino:string ){
    console.log(termino)
       this.router.navigate( ['/buscar', termino])
  }

}
