import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { ViajesService } from '../services/viajes.service';
import {Viajes} from '../interfaces/viajes';
import Swal from 'sweetalert2';
import { Time } from '@angular/common';

declare var google;


interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}  

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {
  dato:string;
  viajes:Viajes[];
  map = null;
  directionsService = new google.maps.DirectionsService();
directionsDisplay = new google.maps.DirectionsRenderer();
origin = { lat: -33.033540814009754, lng: -71.53319486926655 }; //DUOC Viña

destination = { lat: -33.00833299229633, lng: -71.54804898052983 }; // Mall Marina Viña
iniciov:String;
finalv:String;
asientos:String;
costo:String;
horasa:Time;

  constructor(private router:Router,private viajesService:ViajesService) { }

 
  showModal(){
    Swal.fire({
      title: "Viaje Seleccionado",
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
      center: myLatLng,
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
    this.router.navigate(['/iniciousuario']);
    }
  addMarker(marker: Marker) {
      return new google.maps.Marker({
        position: marker.position,
        map: this.map,
        title: marker.title
      });
    }
    
buscarViajes(){
  this.viajesService.getAllViajes2()
  .subscribe( viajes =>{
    console.log(viajes);
    this.viajes = viajes;
  })
}
ObtenerData(){
  return this.viajesService.data
}
}






