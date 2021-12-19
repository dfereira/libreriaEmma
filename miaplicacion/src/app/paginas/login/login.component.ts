import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/services/peticion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private peticionService: PeticionService) { }

  textoValidacion: string = "";
  usuario: string = "";
  password: string = "";

  ngOnInit(): void {
  }

  iniciarSesion(){
    this.peticionService.Post("/iniciarSesion", {usuario: this.usuario, password: this.password}).then(
      (data: any) => {
        if(data.inicioSesionCorrecto){
          localStorage.setItem("login", JSON.stringify({fechaInicioSesion: new Date(), ...data}));
          this.router.navigate(["/"]);
          setTimeout(() => {
            window.location.reload();
          }, 10);
        }
        else{
          this.textoValidacion = data.mensaje;
        }
      }
    )
  }

}
