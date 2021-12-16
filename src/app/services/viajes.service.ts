import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Viajes } from './../interfaces/viajes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private api = 'https://raw.githubusercontent.com/erpantoja/-TeLlevo/main/db.json';

  constructor( private http: HttpClient,) {
   }
   getAllViajes():Observable<any> {
    const path = `${this.api}`;
    return this.http.get<any[]>(path).pipe(
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

  getAllViajes2():Observable<Viajes[]> {
    const path = `${this.api}`;
    return this.http.get<Viajes[]>(path) 
    
  }
  data= Object.values(this.getAllViajes2)
}

