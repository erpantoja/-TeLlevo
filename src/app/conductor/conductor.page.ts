import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ViajesService } from '../services/viajes.service';
import {Viajes} from '../interfaces/viajes';
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}
@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  iniciov:String;
  finalv:String;
  asientos:String;
  costo:String;
  horasa:Time;
  viajes:Viajes[] = [];
  map = null;
  directionsService = new google.maps.DirectionsService();
directionsDisplay = new google.maps.DirectionsRenderer();
origin = { lat: -33.033540814009754, lng: -71.53319486926655 }; //DUOC Viña

destination = { lat: -33.00833299229633, lng: -71.54804898052983 }; // Mall Marina Viña

  constructor(private http:HttpClient,private router:Router, private viajesService: ViajesService, private alertCtrl:AlertController) {}
  
  showModal(){
    Swal.fire({
      title: "Viaje Generado",
      icon: "success",
      confirmButtonText: "Aceptar",
  });
  }
  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -33.033540814009754, lng: -71.53319486926655};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: this.origin,
      zoom: 12
    });
    this.directionsDisplay.setMap(this.map);
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.calculateRoute();

    });

  }
  private calculateRoute() {
    this.directionsService.route({
      origin: this.origin,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('No se pudo realizar la ruta: ' + status);
      }
    });
    }

  cerrar(){
    this.router.navigate(['/conductor']);
    }
  
  addMarker(marker: Marker) {
      return new google.maps.Marker({
        position: marker.position,
        map: this.map,
        title: marker.title
      });
    }
  generarViaje(viaje:Viajes){
    this.viajesService.createViaje(viaje)
    .subscribe(data =>{
      alert("Se Agrego con exito el viaje...!!")
    })

  }
postViaje(){
  let url = "https://raw.githubusercontent.com/erpantoja/-TeLlevo/main/db.json"
  this.http.post(url,{
    iniciov:this.iniciov,
    finalv:this.finalv,
    costo:this.costo,
    asientos:this.asientos,
    horasa:this.horasa
  }).toPromise().then((data:any)=>{
    console.log(data)
  }
  )
}
}
