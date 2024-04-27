import { Component, inject } from '@angular/core';
import { LoginUserModel } from '../../core/models/class/Login';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../core/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginUser: LoginUserModel;
  loginService = inject(LoginService)
  router = inject(Router)
  constructor() {
    this.loginUser = new LoginUserModel();
  }
   login(){
    this.loginService.login(this.loginUser).subscribe((res:any)=>{
      console.log(res)
      alert("login successfully")
      this.router.navigateByUrl('/home')
      localStorage.setItem('jwttoken', res.token)
    },
    (error)=>{
      alert(error)
    })
  }
}
