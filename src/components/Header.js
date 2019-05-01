import React, { Component } from 'react';
import InputSearch from './InputSearch.js';
import '../css/header.css';

class Header extends Component {

  updateVideosList = (vl, t) => {
    this.props.updateVideosList(vl, t);
  }

  render() {
      return (
        <header className="header">
          <h1>Cooper's tube</h1>
          <InputSearch 
            updateVideosList={this.updateVideosList} 
          />
        </header>
    );
  }
}

export default Header;
