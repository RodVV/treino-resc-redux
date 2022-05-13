import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    // eslint-disable-next-line react/prop-types
    const { nome, email, cpf, endereco,
      // eslint-disable-next-line react/prop-types
      cidade, estado, curriculo, cargo, descricao } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nome: state.nome,
  email: state.email,
  cpf: state.cpf,
  endereco: state.endereco,
  cidade: state.cidade,
  estado: state.estado,
  curriculo: state.curriculo,
  cargo: state.cargo,
  descricao: state.descricao,
});

export default connect(mapStateToProps)(FormDataDisplay);
