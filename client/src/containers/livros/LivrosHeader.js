import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class LivrosHeader extends Component {
  countCart(){
    let total_count = 0;
    Object.keys(this.props.cart).forEach(key => { total_count += this.props.cart[key].count });
    return total_count;
  }
  render() {
    let total_count = 0;
    Object.keys(this.props.cart).forEach( key => {total_count += this.props.cart[key].count});

    return (
      <div className="header">
        <div className="row">
          <div className="col s12 center">
            <span className="cyan-text bold logotipo">
              Livraria FLIP
            </span>
            <Link to="/cart" className="cart-link"><i className="material-icons">shopping_cart</i>({this.countCart()} itens)</Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}
export default connect(mapStateToProps, null)(LivrosHeader);