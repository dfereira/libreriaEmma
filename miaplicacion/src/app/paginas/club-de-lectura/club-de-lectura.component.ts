import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/services/peticion.service';

@Component({
  selector: 'app-club-de-lectura',
  templateUrl: './club-de-lectura.component.html',
  styleUrls: ['./club-de-lectura.component.css']
})
export class ClubDeLecturaComponent implements OnInit {

  constructor(private peticionService: PeticionService) { }

  ngOnInit(): void {
    if(!this.peticionService.VerificarLogin()) return;
  }

}
