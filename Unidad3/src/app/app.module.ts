import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TareasComponent } from './Tareas/Tareas.component';
import { NotasComponent } from './Notas/Notas.component';
import { AppRutasModule } from './app-rutas.module';
import { newTareasComponent } from './newTareas/newTareas.component';
import { newNotasComponent } from './newNotas/newNotas.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    NotasComponent,
    newTareasComponent,
    newNotasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRutasModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
