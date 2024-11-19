import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PacienteListar } from '../../models/Paciente';

@Component({
  selector: 'app-formulario-paciente',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario-paciente.component.html',
  styleUrl: './formulario-paciente.component.css'
})
export class FormularioPacienteComponent implements OnInit {

  pacienteForm!:FormGroup
  
  @Output() onSubmit = new EventEmitter<PacienteListar>();

  ngOnInit(): void {
    this.pacienteForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      observacoes: new FormControl(''),
      generoBiologico: new FormControl('', Validators.required),
      dataAniversario: new FormControl('', Validators.required),
      dataRegistro: new FormControl(new Date()), // Inicializa com a data/hora atual
      dataAtualizacao: new FormControl(new Date()) // Inicializa com a data/hora atual
    })
  }

  logFormState() {
    console.log(this.pacienteForm.value);
  }
  
  submit(){
    this.onSubmit.emit(this.pacienteForm.value)
  }
}
