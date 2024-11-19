export interface MedicoListar{
    idMedico: number,
    nome: string,
    crm: string,
    telefone: string,
    email: string,
    status: boolean,
    salario: number,
    idConsultorio: number,
    idEspecialidade: number,
    dataAdmissao: Date
    dataDemissao?: Date
}