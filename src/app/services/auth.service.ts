import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLogged: boolean = false;
  @Output() userSignedIn = new EventEmitter();
  @Output() userLoggedOut = new EventEmitter();

  constructor() { }

  isUserLoggedIn() : boolean{
    this.userLogged = !!localStorage.getItem("token");
    return this.userLogged;
  }

  signIn(email: string, password: string): boolean{
    this.userLogged = true;
    localStorage.setItem("token", email);
    this.userSignedIn.emit();
    return true;
  }

  signUp(username: string, email: string, password: string){

  }

  logout(): void {
    localStorage.removeItem("token");
    this.userLogged = false;
    this.userLoggedOut.emit();
  }
}
