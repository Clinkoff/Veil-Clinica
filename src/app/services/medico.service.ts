import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { MedicoListar } from '../models/Medico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  UrlMedico = environment.UrlMedico
  constructor(private http : HttpClient) { }

  GetMedico(): Observable<MedicoListar[]> {
    return this.http.get<MedicoListar[]>(this.UrlMedico)
  }

  DeletarMedico(idMedico: number): Observable<any> {
    return this.http.delete<any>(`${this.UrlMedico}/${idMedico}`);
  }
  
  CriarMedico(Medico: MedicoListar) : Observable<MedicoListar[]>{
      return this.http.post<MedicoListar[]>(this.UrlMedico,Medico);
  }
  GetMedicoId(idMedico:number): Observable<MedicoListar>{
    return this.http.get<MedicoListar>(`${this.UrlMedico}/${idMedico}`);
  }
  updateMedico(idMedico: number, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.UrlMedico}/${idMedico}`, updatedData);
  }
}
