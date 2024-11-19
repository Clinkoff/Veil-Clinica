import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { PacienteListar } from '../models/Paciente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  UrlPaciente = environment.UrlPaciente;

  constructor(private http : HttpClient) { }

  GetPaciente(): Observable<PacienteListar[]> {
    return this.http.get<PacienteListar[]>(this.UrlPaciente)
  }

  DeletarPaciente(idPaciente: number): Observable<any> {
    return this.http.delete<any>(`${this.UrlPaciente}/${idPaciente}`);
  }
  
  CriarPaciente(paciente: PacienteListar) : Observable<PacienteListar[]>{
      return this.http.post<PacienteListar[]>(this.UrlPaciente,paciente);
  }
  GetPacienteId(idPaciente:number): Observable<PacienteListar>{
    return this.http.get<PacienteListar>(`${this.UrlPaciente}/${idPaciente}`);
  }
  updatePatient(idPaciente: number, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.UrlPaciente}/${idPaciente}`, updatedData);
  }
} 
