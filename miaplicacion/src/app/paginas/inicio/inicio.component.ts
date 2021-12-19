import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/peticion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private peticionService: PeticionService) { }

  ngOnInit(): void {
    if(!this.peticionService.VerificarLogin()) return;
  }

}
