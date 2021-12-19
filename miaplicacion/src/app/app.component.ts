import { Component, OnChanges, OnInit } from '@angular/core';
import { PeticionService } from './services/peticion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  constructor(private peticionService: PeticionService){}

  mostrarFooter: boolean = false;

  ngOnInit(): void {
    this.mostrarFooter = this.peticionService.VerificarLogin();
  }

  ngOnChanges(){
    this.mostrarFooter = this.peticionService.VerificarLogin();
  }
}
