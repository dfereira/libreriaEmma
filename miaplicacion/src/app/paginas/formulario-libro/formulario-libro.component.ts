import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.css']
})
export class FormularioLibroComponent implements OnInit {

  constructor(private actroute: ActivatedRoute, private router: Router) { }

  libroASolicitar: any = {idLibro: 0}
  usuarioActual: any = {};

  ngOnInit(): void {
    const idLibro = this.actroute.snapshot.params['identificador'];
    this.libroASolicitar.idLibro = idLibro;
    const listaLibros = JSON.parse(localStorage.getItem("listaLibros") ?? "[]");
    this.libroASolicitar = listaLibros.find((l:any) => l._id == idLibro);
    this.usuarioActual = JSON.parse(localStorage.getItem("login") ?? "{}").usuario;
  }

  solicitarLibro(){
    alert("Solicitud realizada exitosamente");
    this.router.navigate(["/intercambio-de-libros"]);
  }

}