import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-custom-navbar',
  templateUrl: './custom-navbar.component.html',
  styleUrls: ['./custom-navbar.component.css']
})
export class CustomNavbarComponent {

  constructor(private _router: Router){}


  onLogin(){
    this._router.navigate(['login'])
  }
  onRegister(){
    this._router.navigate(['register'])
  }
}
