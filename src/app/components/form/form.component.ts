import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  peso: number;
  ancho: number;
  alto: number;
  largo: number;
  paisDestino: string;
  paisOrigen: string;

  constructor() {
    this.peso = 0; // Puedes asignar el valor que desees
    this.ancho = 0;
    this.alto = 0;
    this.largo = 0;
    this.paisDestino = '';
    this.paisOrigen = '';
  }
  onSubmit() {
    // Aquí puedes manejar la lógica cuando se envía el formulario
    // Puedes realizar el cálculo de la cotización o cualquier acción que desees
    console.log('Formulario enviado');
}
}
