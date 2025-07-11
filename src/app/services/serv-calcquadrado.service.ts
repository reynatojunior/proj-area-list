import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServCalcquadradoService {

  constructor() { }

  
  calcularArea(lado: number) {
    return lado * lado;
  }
}
