import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(form: NgForm){

    if(form.valid){
      // Form parameters extraction
      const email: string = form.value.email;
      const password: string = form.value.password;

      let result = this.authService.signIn(email,password);
      if(result){
        this.router.navigateByUrl('');
      }
    }
  }

}
