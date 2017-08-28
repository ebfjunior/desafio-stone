import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { removeCartItem } from "../../actions/cart_action";

class CartItem extends Component{
  removeCartItem(e){
    this.props.removeCartItem(this.props.livro);
  }
  render(){
    const {livro} = this.props;

    return (
            <tr key={livro.id}>
            <td className="bold">{livro.nome}</td>
            <td>{livro.count}</td>
            <td>{(livro.valor * livro.count).toLocaleString( 'pt-BR',{ minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' , currencyDisplay: 'symbol'})}</td>
            <td><a href="javascript:void(0)" onClick={this.removeCartItem.bind(this)}><i className="material-icons red-text">close</i></a></td>
            </tr>
            );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeCartItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(CartItem);
