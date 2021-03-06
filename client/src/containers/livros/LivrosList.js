import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import { fetchLivros } from "../../actions/livros_action";

import LivroItem from "./LivroItem"
import Loader from '../../components/Loader'

class LivrosList extends Component{
  componentDidMount() {
    this.props.fetchLivros();
  }
  renderLivros(livro){
    return (<LivroItem key={livro.id} livro={livro}/>);
  }
  render(){
    if(!this.props.livros.length) return(<Loader/>);
    
    return(
           <div className='row'>
            {this.props.livros.map(this.renderLivros)}
           </div>
    );
  }
}

function mapStateToProps({ livros }) {
  return { livros };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLivros }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LivrosList);