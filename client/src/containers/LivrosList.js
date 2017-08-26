import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchLivros } from "../actions/livros_action";

class LivrosList extends Component{
  componentDidMount() {
    this.props.fetchLivros();
  }
  renderLivros(livro){
    return (
            <div>
              <img src={livro.foto_url}/>
            </div>
    );
  }
  render(){
    return(
           <div>
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