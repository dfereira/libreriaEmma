import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/peticion.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  constructor(private peticionService: PeticionService) { }

  topLibros: any[] = [];

  ngOnInit(): void {
    this.peticionService.Get("/topDeLaSemana")
    .then((data: any) => {
      console.log("Top libros desde backend: ", data);
      this.topLibros = data;
      this.topLibros.forEach((l, i) => l.active = (i == 0));
    });
  }

}
