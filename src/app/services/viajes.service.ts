import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Viajes } from './../interfaces/viajes';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private api = 'https://raw.githubusercontent.com/serparram/Tellevo/main/db.json';

  constructor( private http: HttpClient,) {
   }
   getAllViajes() {
    const path = `${this.api}/viajes/`;
    return this.http.get<Viajes[]>(path);
  }

  getViaje(id: string) {
    const path = `${this.api}/viajes/${id}`;
    return this.http.get<Viajes>(path);
  }

  createViaje(viaje: Viajes) {
    const path = `${this.api}/viajes`;
    return this.http.post(path, viaje);
  }
  deleteViaje(id: string) {
    const path = `${this.api}/viajes/${id}`;
    return this.http.delete(path);
  }
}

