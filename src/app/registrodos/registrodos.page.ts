import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrodos',
  templateUrl: './registrodos.page.html',
  styleUrls: ['./registrodos.page.scss'],
})
export class RegistrodosPage implements OnInit {

  formularioRegistrodos: FormGroup;

  constructor(public fb:FormBuilder,public alertController: AlertController, public navCtrl: NavController) {
    this.formularioRegistrodos = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required), 
      'confirmacionPassword': new FormControl("",Validators.required) 
     })
   }

  ngOnInit() {
  }

  async guardar(){
   var f = this.formularioRegistrodos.value;

   if(this.formularioRegistrodos.invalid){
    const alert = await this.alertController.create({
      header: 'Datos incompletos',
      message: 'Tienes que llenar todos los datos',
      buttons: ['Aceptar']
    });

    await alert.present();
    return;
   }

   var usuario = {
    nombre: f.nombre,
    password: f.password
  }

  localStorage.setItem('usuario',JSON.stringify(usuario));

    localStorage.setItem('ingresado','true');
    this.navCtrl.navigateRoot('menu/conductor');
  }

}
