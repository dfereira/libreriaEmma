import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/peticion.service';

@Component({
  selector: 'app-intercambio-de-libros',
  templateUrl: './intercambio-de-libros.component.html',
  styleUrls: ['./intercambio-de-libros.component.css']
})
export class IntercambioDeLibrosComponent implements OnInit {

  constructor(private peticionService: PeticionService) { }

  listaLibros: any[] = [];

  ngOnInit(): void {
    if(!this.peticionService.VerificarLogin()) return;
    this.peticionService.Get("/listarLibros?categoria=Clasicos")
    .then((data: any) => {
      this.listaLibros = data;
      localStorage.setItem("listaLibros", JSON.stringify(this.listaLibros));
    });
  }

}
