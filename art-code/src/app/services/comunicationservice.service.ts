import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationserviceService {

  activo: boolean = true

  constructor() { }

  /* public activation(value){
    console.log("servicio de activacion")
    this.activo = value
  } */

}
