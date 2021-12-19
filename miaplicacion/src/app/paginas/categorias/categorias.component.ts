import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/peticion.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(private peticionService: PeticionService) { }

  categorias: any[] = [];

  ngOnInit(): void {
    if(!this.peticionService.VerificarLogin()) return;

    this.peticionService.Get("/listarCategorias")
      .then((categorias: any) => {
        this.peticionService.Get("/listarLibros")
          .then((libros: any) => {
            categorias.forEach((categoria: any, i: number) => {
                this.categorias.push({
                  idCategoria: i,
                  nombreCategoria: categoria.nombre,
                  libros:  libros.filter((l: any) => l.idCategoria == categoria._id)
                })
            });
          }
        );
      }
    );
  }

}
