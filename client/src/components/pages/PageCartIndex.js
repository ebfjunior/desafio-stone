import React, { Component } from 'react';
import CartList from '../../containers/cart/CartList'
import CartHeader from '../cart/CartHeader'

export default class PageCartIndex extends Component {
  render() {
    return (
      <div>
        <CartHeader/>
        <CartList/>
      </div>
    );
  }
}
