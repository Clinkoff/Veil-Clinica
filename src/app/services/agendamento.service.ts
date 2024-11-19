import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { AgendamentoListar } from '../models/Agendamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  UrlAgendamento = environment.UrlAgendamento
  constructor(private http : HttpClient) { }

  GetAgendamento(): Observable<AgendamentoListar[]> {
    return this.http.get<AgendamentoListar[]>(this.UrlAgendamento)
  }

  DeletarAgendamento(idAgendamento: number): Observable<any> {
    return this.http.delete<any>(`${this.UrlAgendamento}/${idAgendamento}`);
  }
  
  CriarAgendamento(Agendamento: AgendamentoListar) : Observable<AgendamentoListar[]>{
      return this.http.post<AgendamentoListar[]>(this.UrlAgendamento,Agendamento);
  }
  GetAgendamentoId(idAgendamento:number): Observable<AgendamentoListar>{
    return this.http.get<AgendamentoListar>(`${this.UrlAgendamento}/${idAgendamento}`);
  }
  updateAgendamento(idAgendamento: number, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.UrlAgendamento}/${idAgendamento}`, updatedData);
  }
}
