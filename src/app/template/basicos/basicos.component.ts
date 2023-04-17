import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  public initForm = {
    producto: '',
    precio: 0,
    existencias: 0
  }

  constructor() { }

  ngOnInit(): void {

  }

  public nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched;
  }

  public precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.value < 0 && this.miFormulario?.controls['precio']?.touched;
  }

  //Obtener la referencia por parametros
  // public guardar( miFormulario:NgForm ) {
  //   console.log(miFormulario.value);
  // }

  public guardar() {
    console.log(this.miFormulario.value);
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }
}
