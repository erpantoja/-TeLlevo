import { Component } from '@angular/core';
import { ViajesService } from './services/viajes.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private viajesService:ViajesService) {}

  getAllViajes() {
    this.viajesService.getAllViajes()
    .subscribe(viajes => {
      console.log(viajes);
    });
  }
  getViaje() {
    this.viajesService.getViaje('1')
    .subscribe(viaje => {
      console.log(viaje);
    });
  }
  createViaje() {
    const viaje = {
      viajeId: '2',
      iniciov: 'Duoc Uc Viña del Mar',
      finalv: 'Mall Marina Viña del Mar',
      costo: '1000',
      asientos:'4',
      horasa: '10:30'
    };
    this.viajesService.createViaje(viaje)
    .subscribe((newViaje) => {
      console.log(newViaje);
    });
  }

}