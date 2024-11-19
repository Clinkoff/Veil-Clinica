export interface Time {
    hour: number; // 0-23
    minute: number; // 0-59
    second?: number; // opcional, 0-59
}

export interface AgendamentoListar{
    idAgenda: number,
    idPaciente: number,
    idMedico: number,
    tipoAgendamento: string,
    statusAgenda: string,
    observacoes: string,
    horaInicio: string,
    horaFim: string,
    dataConsulta: Date
    valorConsulta: number,
    valorComDesconto: number
}