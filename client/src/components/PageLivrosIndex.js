import React, { Component } from 'react';
import LivrosList from '../containers/LivrosList'
import LivrosHeader from '../components/LivrosHeader'

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
