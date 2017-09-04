import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render(props) {
    return (
      <div className="button">
       {this.props.val}
      </div>
    );
  }
}

export default Button;