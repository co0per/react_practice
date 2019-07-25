import React, { Component } from 'react';
import InputSearch from './InputSearch';
import '../css/header.css';

class Header extends Component {

  updateTitle = (t) => {
    this.props.updateTitle(t);
  }

  hidePlayer = () => {
    this.props.hidePlayer();
  }

  render() {
      return (
        <header className="header">
          <h1>Cooper's tube</h1>
          <InputSearch
            hidePlayer={this.hidePlayer}
            updateTitle={this.updateTitle} 
          />
        </header>
    );
  }
}

export default Header;