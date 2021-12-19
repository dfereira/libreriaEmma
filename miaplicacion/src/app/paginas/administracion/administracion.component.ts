import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/services/peticion.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  constructor(private peticionService: PeticionService, private router: Router) { }

  usuarios: any[] = [];
  estaEditando: boolean = false;

  ngOnInit(): void {
    if(this.peticionService.VerificarLogin()){
      const login = JSON.parse(localStorage.getItem("login") ?? "");
      if(login != "")
         if(login.usuario.usuario != "administrador")
          this.router.navigate([""]);

      this.actualizarUsuarios();
    } 
    else{
      return;
    }
  }

  editarUsuario(u: any){
    u.estaEditando = !u.estaEditando;
  }

  aceptarEdicion(u: any){
    this.peticionService.Post("/actualizarUsuario", {
      _id: u._id,
      usuario: u.usuario,
      password: u.password,
      nombre: u.nombre,
      correo: u.correo,
      direccion: u.direccion
    })
    .then((data: any) => {
      if(data.actualizarUsuarioCorrecto == true){
        alert("Usuario actualizado correctamente");
        this.actualizarUsuarios();
      }
    });
    this.editarUsuario(u);
  }

  borrarUsuario(_id: string){
    console.log(_id);
    this.peticionService.Post("/borrarUsuario", {_id})
    .then((data: any) => {
      if(data.borrarUsuarioCorrecto == true){
        alert("Usuario borrado correctamente");
        this.actualizarUsuarios();
      }
    });
  }

  actualizarUsuarios(){
    this.peticionService.Get("/listarUsuarios").then(
      (data: any) => {
        this.usuarios = data.map((u: any) => { return{...u, estaEditando: false}});
      } 
    )
  }
}
