import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationserviceService {

  activo: boolean = true
  proyect_snippet = false

  constructor() { }

  /* public activation(value){
    console.log("servicio de activacion")
    this.activo = value
  } */

}
