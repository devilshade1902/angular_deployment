import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  loggedIn:boolean = false

  toggleLogin()
  {
    this.loggedIn = !this.loggedIn
  }

  isAuthenticated()
  {
    return this.loggedIn;
  }
}
