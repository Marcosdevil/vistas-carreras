import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Noticias } from './Interfaces/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private URL = "https://back-ranking.herokuapp.com/ver/noticias"

  constructor(private http: HttpClient) {}

  // Este metodo es para obtener la lista de noticias del back
  obtenerNoticias():Observable<Noticias> {
    return this.http.get<Noticias>(`${this.URL}`);
  }
}
