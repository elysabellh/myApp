import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('Aqui se inicia el componente');
  }

  ngOnDestroy(): void {
    console.log('aqui se destruye el componente');
  }

}
