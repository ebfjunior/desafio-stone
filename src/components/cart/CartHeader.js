import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CartHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="col s12 center">
          <Link to="/" className="back-link"><i className="material-icons">arrow_back</i></Link>
            <span className="cyan-text bold logotipo">
              Livraria FLIP
            </span>
          </div>
        </div>
      </div>
    );
  }
}