import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addCartItem } from "../actions/cart_action";

class LivroItem extends Component{
  constructor(props){
    super(props);
    
    this.livro = this.props.livro;  
    this.state = {inCart: false};
  }
  componentDidMount() {
    this.setState({inCart: this.checkStatus()});
  }
  checkStatus(){
    const {cart} = this.props;
    return cart[this.livro.id] != undefined;
  }
  addCartItem(e){
    addCartItem(this.livro, () => {this.checkStatus})
  }
  render(){

    return (
            <div className="col s12 m4 l2 center-align livro-item">
              <div className="livro-item-container">
                <div className="livro-item-content">
                  <div className="livro-nome bold">{_.truncate(this.livro.nome,{'length': 30})}</div>
                  <img src={this.livro.foto_url} className="responsive-img"/>
                  <div className="amber-text bold livro-preco">{this.livro.valor.toLocaleString( 'pt-BR',{ minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' , currencyDisplay: 'symbol'})}</div>
                </div>
                <div className="cart-add">
                  <button className="waves-effect waves-light btn {}" onClick={this.addCartItem}>
                    <span className="label">Adicionar</span>
                  </button>
                </div>
              </div>
            </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCartItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LivroItem);
