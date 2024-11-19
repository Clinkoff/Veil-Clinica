import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { PacienteListar } from '../../models/Paciente';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrigido "styleUrl" para "styleUrls"
})
export class HomeComponent implements OnInit {

  pacientes: PacienteListar[] = []; // Armazena a lista filtrada de pacientes
  pacientesGeral: PacienteListar[] = []; // Armazena a lista completa de pacientes

  constructor(private ServicePaciente: PacienteService) { }

  ngOnInit(): void {
    // Obtendo a lista de pacientes do serviço
    this.ServicePaciente.GetPaciente().subscribe({
      next: (response) => {
        this.pacientes = response; // Atualiza a variável pacientes com os dados recebidos
        this.pacientesGeral = response; // Mantém uma cópia da lista completa para busca
        console.log(response);
      },
      error: (err) => {
        console.error('Erro ao carregar pacientes:', err); // Loga o erro para depuração
      }
    });
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement; // Obtém o valor do input
    const value = target.value.toLowerCase().trim(); // Normaliza o texto (caixa baixa e sem espaços)

    // Filtra pacientes pela propriedade nome
    this.pacientes = this.pacientesGeral.filter(paciente => 
      paciente.nome?.toLowerCase().includes(value) // Verifica se o nome inclui o texto buscado
    );
  }

  deletar(idPaciente: number): void {
    this.ServicePaciente.DeletarPaciente(idPaciente).subscribe({
      next: () => {
        // Atualiza a lista local de pacientes
        this.pacientes = this.pacientes.filter(paciente => paciente.idPaciente !== idPaciente);
        this.pacientesGeral = this.pacientesGeral.filter(paciente => paciente.idPaciente !== idPaciente);
        alert('Paciente excluído com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao deletar paciente:', err);
        alert('Erro ao excluir o paciente. Tente novamente.');
      }
    });
  }
}
