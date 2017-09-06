import React, { Component } from 'react';
import './MainScreen.css';

class MainScreen extends Component {
  render(props) {
    return (
    	 <div className = "main-screen">{this.props.resualStr}</div>     
    );
  }
}

export default MainScreen;