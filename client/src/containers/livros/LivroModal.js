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
      <div id={`modal-${this.livro.id}`} className="modal">
        <div className="modal-content">
          <div className="row">
            <div className="col s12 m4">
              <img src={this.livro.foto_url} className="responsive-img" />
            </div>
            <div className="col s12 m8">
              <div className="row">
                <div className="col s12 bold">
                  {this.livro.nome}
                </div>
                <div className="col s12">
                  {this.livro.descricao}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCartItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(LivroModal);
