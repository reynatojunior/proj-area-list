import { Component } from '@angular/core';
import { ServCalcquadradoService } from '../../services/serv-calcquadrado.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcular-quadrado',
  imports: [FormsModule],
  templateUrl: './calcular-quadrado.component.html',
  styleUrl: './calcular-quadrado.component.css',
})
export class CalcularQuadradoComponent {
  resultado: number = 0;
  lado: any;

  constructor(private servCalcquadradoService: ServCalcquadradoService) {}

  calcularArea(lado: number) {
    this.resultado = this.servCalcquadradoService.calcularArea(lado);
    return this.resultado;
  }
}
