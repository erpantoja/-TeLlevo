import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  entradaActual: {
    fecha: string,
    fechaTexto: string,
    texto: string
  };

  constructor(private router:Router) {}
  login(){
    this.router.navigate(['/login']);
    }
    logindos(){
      this.router.navigate(['/logindos']);
      }
  ngOnInit() {
  }

}
