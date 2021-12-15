import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-logindos',
  templateUrl: './logindos.page.html',
  styleUrls: ['./logindos.page.scss'],
})
export class LogindosPage implements OnInit {
  dato:string;
  formularioLogindos: FormGroup;

  constructor(public fb:FormBuilder, public alertController: AlertController, public navCtrl: NavController, private router:Router, public toastController: ToastController) { 

  this.formularioLogindos = this.fb.group({
   'nombre': new FormControl("",Validators.required),
   'password': new FormControl("",Validators.required) 
  })
}
conductor(){
  this.router.navigate(['/conductor']);
  }
  registrodos(){
    this.router.navigate(['/registrodos']);
    }
    olvi(){
      this.router.navigate(['/olvi']);
      }
    saludar(){
      this.presentToast("Hola "+this.dato);
      }
    async presentToast(msg:string) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
    }  
  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogindos.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true')
      this.navCtrl.navigateRoot('menu/conductor');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }

}