import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  signUp(email:any, password:any){
    this.http.post<AuthenticatorResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY].environment.api_key', {
      email: email,
      password : password,

    })
    
  }
}
