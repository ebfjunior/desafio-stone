import React, { Component } from 'react';
import LivrosList from '../../containers/livros/LivrosList'
import LivrosHeader from '../../containers/livros/LivrosHeader'

export default class PageLivrosIndex extends Component {
  render() {
    return (
      <div>
        <LivrosHeader/>
        <LivrosList/>
      </div>
    );
  }
}
