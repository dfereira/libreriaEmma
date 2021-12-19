import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionService } from 'src/app/services/peticion.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(private actroute: ActivatedRoute, private peticionService: PeticionService) { }

  libro: any = {};
  ngOnInit(): void {
    if(!this.peticionService.VerificarLogin()) return;

    const idLibro = this.actroute.snapshot.params['identificador'];
    this.peticionService.Get("/obtenerDetalleLibro?idLibro="+idLibro)
      .then((libro: any) => {
        this.libro = libro;
      }
    );
  }
}
