import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  esAdministrador: boolean = false;

  ngOnInit(): void {
    const login = JSON.parse(localStorage.getItem("login") ?? "");
    if(login != "")
      this.esAdministrador = login.usuario.usuario == "administrador";
  }

  cerrarSesion(){
    localStorage.removeItem("login");
    this.router.navigate(["/login"]);
  }

}
