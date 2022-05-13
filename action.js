export const CHANGE_FORM = 'CHANGE_FORM';
export const CHANGE_PROFESSIONAL = 'CHANGE_PROFESSIONAL';

export const actionChangeForm = (state) => ({
  type: CHANGE_FORM,
  nome: state.nome,
  email: state.email,
  cpf: state.cpf,
  endereco: state.endereco,
  cidade: state.cidade,
  estado: state.estado,
});

export const actionProfessional = (state) => ({
  type: CHANGE_PROFESSIONAL,
  curriculo: state.curriculo,
  cargo: state.cargo,
  descricao: state.descricao,
});
