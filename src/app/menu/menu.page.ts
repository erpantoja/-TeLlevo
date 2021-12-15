import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;

  constructor(public alertController: AlertController, public navCtrl: NavController) { }

  paginas = [
    {
      titulo: 'Pasajero',
      url: '/menu/pasajero',
      icono: 'person'
    },
    {
      titulo: 'Conductor',
      url: '/menu/conductor',
      icono: 'car'
    },
    {
      titulo: 'Users',
      url: '/menu/users',
      icono: 'person'
    }
  ]

  
  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i){
    this.indiceSeleccionado = i;
  }


  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Estas seguro que quieres salir?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            
          }
        }, {
          text: 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('inicio');
          }
        }
      ]
    });

    await alert.present();
  }

}
