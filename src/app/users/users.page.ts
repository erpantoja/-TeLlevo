import { Component, OnInit } from '@angular/core';
import { Proveedor1Service } from '../proveedor1.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  
  user:any;
  users:any;
  

  constructor(public proveedor:Proveedor1Service) { }

  ionViewWillEnter(){
    this.getUsuarios();

  }
  getUsuarios(){
    this.proveedor.getUsuarios().subscribe((data)=>{
      this.users.data;
    })
  }

  ngOnInit() {
    this.getUsuarios();
  }
}
