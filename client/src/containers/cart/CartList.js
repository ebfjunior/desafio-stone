import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { removeCartItem } from "../../actions/cart_action";

import CartItem from "./CartItem"

class CartList extends Component{
  renderCart(id){
    const livro = this.props.cart[id];
    return (<CartItem key={livro.id} livro={livro}/>);
  }
  tableContent(content){
    return (
      <div className="container cart-list">
        <div className='row'>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {content}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  render(){
    if(!Object.keys(this.props.cart).length)
      return this.tableContent(<tr><td className="bold center" colSpan="4">Nenhum livro adicionado ao carrinho</td></tr>);

    const lines = Object.keys(this.props.cart).map(this.renderCart.bind(this));
    
    let total = 0;
    Object.keys(this.props.cart).forEach((key) => {total += (this.props.cart[key].valor * this.props.cart[key].count)});

    return(
      this.tableContent([
        ...lines,
        <tr key="footer">
          <td colSpan="2" className="right-align">&nbsp;</td>
          <td colSpan="2" className="bold">{total.toLocaleString( 'pt-BR',{minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' , currencyDisplay: 'symbol'})}</td>
        </tr>
      ])
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeCartItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);