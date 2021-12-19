import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor(private http: HttpClient, private router: Router) { }

  Post(ruta: string, data: {}){
    let promise = new Promise((resolve,reject) => {
      this.http.post(environment.urlBackend + ruta,data)
      .toPromise()
      .then((res:any) => {
        resolve(res)
      })
    })
    return promise
  }

  Get(ruta: string){
    let promise = new Promise((resolve,reject) => {
      this.http.get(environment.urlBackend + ruta)
      .toPromise()
      .then((res:any) => {
        resolve(res)
      })
    })
    return promise
  }

  Put(ruta: string, data: {}){
    let promise = new Promise((resolve,reject) => {
      this.http.put(environment.urlBackend + ruta,data)
      .toPromise()
      .then((res:any) => {
        resolve(res)
      })
    })
    return promise
  }

  VerificarLogin(): boolean{
    const login = localStorage.getItem("login");
    if(!login){
      this.router.navigate(["/login"]);
      return false;
    }
    return true;
  }
}