import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }
user={}
  login(mail: HTMLInputElement, password:HTMLInputElement) {

      this.authService.login(mail.value,password.value).then(res=>{
         this.router.navigate(['/books']);
      }).catch(e=>{ console.log( e);
      })
    }
  

  ngOnInit(): any {
   
  }
}


