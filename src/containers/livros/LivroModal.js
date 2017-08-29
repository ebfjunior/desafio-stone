import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import classNames from 'classnames';

import { addCartItem } from "../../actions/cart_action";

class LivroModal extends Component{
  constructor(props){
    super(props);
    this.livro = this.props.livro;  
  }
  addCartItem(e){
    this.props.addCartItem(this.livro);
  }
  render(){
    const classes = classNames('waves-effect', 'btn', 'waves-light', 'cyan');

    return (
      <div id={`modal-${this.livro.id}`} className="modal modal-fixed-footer">
        <div className="modal-content">
          <div className="row">
            <div className="col s12 m4">
              <p>
                <img src={this.livro.foto_url_original} className="responsive-img" />
              </p>
              <div className="livro-preco-modal bold center">{this.livro.valor.toLocaleString( 'pt-BR',{ minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' , currencyDisplay: 'symbol'})}</div>
            </div>
            <div className="col s12 m8">
              <div className="row">
                <div className="col s12 bold">
                  <h5 className="cyan-text">{this.livro.nome}</h5>
                </div>
                <div className="col s12">
                  {this.livro.descricao}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a href="javascript:void(0)" className="modal-action modal-close waves-effect waves-green btn-flat">Cancelar</a>
          <a href="javascript:void(0)" className="modal-action modal-close waves-effect waves-green btn-flat cyan-text" onClick={this.addCartItem.bind(this)}>Adicionar</a>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCartItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(LivroModal);
