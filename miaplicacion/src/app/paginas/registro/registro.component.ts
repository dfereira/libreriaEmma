import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/services/peticion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private peticionService: PeticionService, private router: Router) { }

  usuario: any = {
    usuario: "",
    nombre: "",
    password: "",
    correo: "",
    direccion: ""
  }

  confirmarPassword: string = "";
  textoValidacion: string = "";

  ngOnInit(): void {
  }

  registrarUsuario(){
    if(this.usuario.password != this.confirmarPassword){
      this.textoValidacion = "Las contraseñas no coinciden.";
      return;
    }
    if(this.usuario.usuario &&
       this.usuario.nombre &&
       this.usuario.password &&
       this.usuario.correo &&
       this.usuario.direccion){
         this.textoValidacion = "";
         this.peticionService.Post("/registrarUsuario", this.usuario)
         .then((data: any) => {
           if(data.registroUsuarioCorrecto){
             alert("Usuario registrado correctamente");
             this.router.navigate(["/login"]);
           }
           else{
             alert("Hubo un problema en la creación de usuario");
           }
         });
    }
    else{
      this.textoValidacion = "Datos Incompletos";
    }
  }

}
