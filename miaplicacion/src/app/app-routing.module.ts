import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './paginas/administracion/administracion.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { ClubDeLecturaComponent } from './paginas/club-de-lectura/club-de-lectura.component';
import { DetallesComponent } from './paginas/detalles/detalles.component';
import { FormularioLibroComponent } from './paginas/formulario-libro/formulario-libro.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { IntercambioDeLibrosComponent } from './paginas/intercambio-de-libros/intercambio-de-libros.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'categorias',component:CategoriasComponent},
  {path:'club-de-lectura',component:ClubDeLecturaComponent},
  {path:'intercambio-de-libros',component:IntercambioDeLibrosComponent},
  {path:'administracion',component: AdministracionComponent},
  {path:'registrarUsuario',component: RegistroComponent},
  {path:'detalleLibro/:identificador',component:DetallesComponent},
  {path:'solicitarLibro/:identificador', component:FormularioLibroComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
