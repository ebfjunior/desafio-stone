import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { removeCartItem } from "../actions/cart_action";

import CartItem from "../containers/CartItem"

class CartList extends Component{
  renderCart(id){
    const livro = this.props.cart[id];
    return (<CartItem key={livro.id} livro={livro}/>);
  }
  render(){
    return(
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
                {Object.keys(this.props.cart).map(this.renderCart.bind(this))}
              </tbody>
            </table>
          </div>
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