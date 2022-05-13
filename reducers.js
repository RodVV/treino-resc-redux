import { CHANGE_FORM, CHANGE_PROFESSIONAL } from '../actions/actions';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  curriculo: '',
  cargo: '',
  descricao: '' };

function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_FORM:
    return { ...state,
      nome: action.nome,
      email: action.email,
      cpf: action.cpf,
      endereco: action.endereco,
      cidade: action.cidade,
      estado: action.estado };
  case CHANGE_PROFESSIONAL:
    return { ...state,
      curriculo: action.curriculo,
      cargo: action.cargo,
      descricao: action.descricao,
    };
  default:
    return state;
  }
}

export default reducers;
