import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-olvi',
  templateUrl: './olvi.page.html',
  styleUrls: ['./olvi.page.scss'],
})
export class OlviPage implements OnInit {
  dato:string;

  constructor(private router:Router, public toastController: ToastController) { }
  login(){
    this.router.navigate(['/inicio']);
    }
    inicio(){
      this.router.navigate(['/inicio']);
      }


  ngOnInit() {
  }

}
