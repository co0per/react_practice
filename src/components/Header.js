import React, { Component } from 'react';
import InputSearch from './InputSearch.js';
import '../css/header.css';

class Header extends Component {

  manageVideosList = (e) => {
    this.props.manageVideosList(e);
  }

  render() {
      return (
        <header className="header">
          <h1>Cooper's tube</h1>
          <InputSearch 
            manageVideosList={this.manageVideosList} 
          />
        </header>
    );
  }
}

export default Header;
