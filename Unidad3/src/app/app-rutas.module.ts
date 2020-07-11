import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {NotasComponent} from './Notas/Notas.component';
import { TareasComponent } from './Tareas/Tareas.component';


const routes: Routes =[
  {path: 'tareas', component: TareasComponent},
  {path: 'notas',component: NotasComponent},
  {path: '**', pathMatch:'full', redirectTo:'tareas'},
];  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRutasModule { }
