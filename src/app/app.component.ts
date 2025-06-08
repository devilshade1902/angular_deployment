import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  loggedIn!:boolean
  constructor(private loginService:LoginService){

    }

  toggleLogin()
  {
    this.loginService.toggleLogin()
  }

  login(){
    return this.loginService.isAuthenticated()
  }

}
