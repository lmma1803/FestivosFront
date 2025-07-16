import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivoServices {

  private url:string;

  constructor(private http: HttpClient){
    this.url = `${environment.urlBase}`;
  }

  public obtener(texto: string):Observable<FestivoServices[]>{
    return this.http.get<FestivoServices[]>(`${this.url}obtener/${texto}`);
  }

  public verificar(texto: string): Observable<string> {
  return this.http.get(`${this.url}verificar/${texto}`, { responseType: 'text' });
}

}
