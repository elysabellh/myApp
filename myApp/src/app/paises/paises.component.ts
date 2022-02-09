import { Component, OnInit } from '@angular/core';
import { PaisesService } from "./paises.service";

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  constructor(private readonly paisesService: PaisesService) { }

  ngOnInit(): void {
    
    this.paisesService.getPaises().subscribe(mispaises => {
      mispaises.data.forEach(pais => {
      console.log(pais.city)
      });
    })

    // const miResultado = this.paisesService.getPaises();
    // miResultado.subscribe(mispaises => {
    //   console.log('Mis paises ', mispaises)
    // })
    
  }

}
