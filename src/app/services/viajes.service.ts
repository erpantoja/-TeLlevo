import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Viajes } from './../interfaces/viajes';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private api = 'https://raw.githubusercontent.com/erpantoja/-TeLlevo/main/db.json';

  constructor( private http: HttpClient,) {
   }
   getAllViajes() {
    const path = `${this.api}`;
    return this.http.get<Viajes[]>(path).pipe(
      retry(3)
    );
  }

  getViaje(id: string) {
    const path = `${this.api}${id}`;
    return this.http.get<Viajes>(path);
  }

  createViaje(viaje: Viajes) {
    const path = `${this.api}`;
    return this.http.post(path, viaje).pipe(
      retry(3)
    );;
  }
  deleteViaje(id: string) {
    const path = `${this.api}${id}`;
    return this.http.delete(path)
  }
}

