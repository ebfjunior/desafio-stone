import React, {Component} from 'react';
import axios from 'axios';

const ROOT_WS_URL = 'http://localhost:3000';

export default class LivrosList extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    axios.get(`${ROOT_WS_URL}/livros.json`).then(response => {
      console.log(response);
    });

  }
  render(){
    return(
           <div>

           </div>
    );
  }
}