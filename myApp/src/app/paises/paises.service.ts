import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paises } from "./paisesModel";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(
    private readonly http:HttpClient
  ) { }

  getPaises(): Observable<Paises>{
    return this.http.get<Paises>('https://countriesnow.space/api/v0.1/countries/population/cities');
  }
}
