import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  resultado: number = 0;
  numero1: number = 0;
  numero2: number = 0;

  somar(){
    console.log('Somando', this.numero1, this.numero2);
    this.resultado = this.numero1 + this.numero2;
  }

}
