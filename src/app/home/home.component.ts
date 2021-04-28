import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clientes } from '../clientes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  opcion:number=0;
  formulario:FormGroup;
  lista:Array<any> = [];
  

  constructor(public form:FormBuilder) { 

    this.formulario = this.form.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      genero:['',Validators.required],
      pais:['',Validators.required],
      ciudad:['',Validators.required]
    });

  }

  ngOnInit(): void {
  }

  MostrarOpcion(opcion:number){
    this.opcion = opcion;
  }

  onSubmit(){
    this.lista.push(this.formulario.value);

  }

  setMostrar(valor:number){
    this.opcion = valor;
  }

}
