import { Routes } from '@angular/router';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { EditarPacienteComponent } from './pages/editar-paciente/editar-paciente.component';
import { PacienteDetalheComponent } from './pages/detalhes-paciente/detalhes-paciente.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento/agendamento.component';
import { MedicoComponent } from './pages/medico/medico/medico.component';
import { EditarMedicoComponent } from './pages/medico/editar-medico/editar-medico.component';
import { DetalhesMedicoComponent } from './pages/medico/detalhes-medico/detalhes-medico.component';

export const routes: Routes = [
    {path: 'cadastro-paciente', component: CadastroPacienteComponent},
    {path: '',component: HomeComponent },
    {path: 'editar-paciente/:idPaciente', component: EditarPacienteComponent},
    {path: 'detalhes-paciente/:idPaciente', component: PacienteDetalheComponent},
    {path: 'agendamento/agendamento', component: AgendamentoComponent},
    {path: 'medico/medico', component: MedicoComponent},
    {path: 'medico/medico/editar-medico', component: EditarMedicoComponent},
    {path: 'medico/medico/detalhes-medico', component: DetalhesMedicoComponent}
];
