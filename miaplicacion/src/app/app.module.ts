import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { ClubDeLecturaComponent } from './paginas/club-de-lectura/club-de-lectura.component';
import { IntercambioDeLibrosComponent } from './paginas/intercambio-de-libros/intercambio-de-libros.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { FormsModule } from '@angular/forms';
import { DetallesComponent } from './paginas/detalles/detalles.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioLibroComponent } from './paginas/formulario-libro/formulario-libro.component';
import { LoginComponent } from './paginas/login/login.component';
import { AdministracionComponent } from './paginas/administracion/administracion.component';
import { RegistroComponent } from './paginas/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    CategoriasComponent,
    ClubDeLecturaComponent,
    IntercambioDeLibrosComponent,
    RegistroComponent,
    CarruselComponent,
    DetallesComponent,
    FormularioLibroComponent,
    LoginComponent,
    AdministracionComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
