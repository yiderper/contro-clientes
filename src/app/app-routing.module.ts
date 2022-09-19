import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';

const routes: Routes = [
  {path: '', component: TableroComponent}, // Ruta por default
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegistroComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'cliente/editar/:id', component: EditarClienteComponent},
  {path: '**', component: NoEncontradoComponent}, //Rutas que no se encuentran
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
