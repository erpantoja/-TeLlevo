import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable()
export class Proveedor1Service {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
    }
    // Se establece la base url del API a consumir
    apiURL = 'https://jsonplaceholder.typicode.com';
   

  

  constructor(public http: HttpClient) {
    console.log('Hello Proveedor1Service');
   }

   obtenerDatos(){
     return this.http.get('https://jsonplaceholder.typicode.com/users');
   }
  
   getUsuarios():Observable<any>{
     return this.http.get(this.apiURL+'/users/').pipe(
       retry(3)
     );
   }
}
