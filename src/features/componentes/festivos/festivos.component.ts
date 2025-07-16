import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FestivoServices } from '../../../core/servicios/festivo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-festivos',
  imports: [
    CommonModule,
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  templateUrl: './festivos.component.html',
  styleUrl: './festivos.component.css'
})
export class FestivosComponent  {

  constructor(private festivoServicio: FestivoServices) {
  }

  public anioBusqueda: string = "";
  public esFestivo: string = "";
  public fechaVerificar: Date | null = null;
  public festivos: FestivoServices[] = []


  public verificar() {

    if(!this.fechaVerificar){
      window.alert("Selecciona una fecha")
      return;
    }

    const año = this.fechaVerificar.getFullYear();
    const mes = this.fechaVerificar.getMonth() + 1; 
    const dia = this.fechaVerificar.getDate();


    this.festivoServicio.verificar(`${año}/${mes}/${dia}`).subscribe({
      next: (response) => {
        this.esFestivo = response;
      },
      error: (error) => {
        console.error(error);
        window.alert(error.message);

      }
  });
  }

  public obtener() {

    if(!this.anioBusqueda){
      window.alert("Ingresa un año")
      return;
    }

    this.festivoServicio.obtener(this.anioBusqueda).subscribe({
      next: (response) => {
        this.festivos = response;
      },
      error: (error) => {
        window.alert(error.message);
      }
    });

  }

}
