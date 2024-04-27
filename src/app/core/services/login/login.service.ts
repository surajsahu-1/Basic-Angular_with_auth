import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { APIConstants } from '../../constatnts/APIConstants';
import { LoginUserModel } from '../../models/class/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_URL = environment.API_URL

  constructor() { }
  private http = inject(HttpClient)

  login(user:LoginUserModel) {
    return this.http.post(this.API_URL + APIConstants.AUTH.LOGIN, user)
  }
}
