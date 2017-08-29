import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import classNames from 'classnames';

import { addCartItem } from "../../actions/cart_action";

import LivroModal from "./LivroModal"

class LivroItem extends Component{
  constructor(props){
    super(props);
    this.livro = this.props.livro;  
  }
  componentDidMount(){
      $(`#modal-${this.livro.id}`).modal();
  }
  addCartItem(e){
    this.props.addCartItem(this.livro);
  }
  render(){
    const classes = classNames('waves-effect', 'btn', 'waves-light', 'cyan');

    return (
      <div>
        <div className="col s12 m4 l2 center-align livro-item">
          <div className="livro-item-container">
            <div className="livro-item-content">
              <div className="livro-nome bold">{_.truncate(this.livro.nome,{'length': 30})}</div>
              <a href={`#modal-${this.livro.id}`} className="modal-trigger livro-more"><img src={this.livro.foto_url} className="responsive-img"/></a>
              <div className="amber-text bold livro-preco">{this.livro.valor.toLocaleString( 'pt-BR',{ minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' , currencyDisplay: 'symbol'})}</div>
            </div>
            <div className="cart-add">
              <button className={classes} onClick={this.addCartItem.bind(this)}>
                <span className="label">ADICIONAR</span>
              </button>
            </div>
          </div>
        </div>
        <LivroModal livro={this.livro}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCartItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(LivroItem);
