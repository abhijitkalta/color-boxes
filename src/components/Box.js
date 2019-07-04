import React, { Component } from 'react';

class Box extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: this.props.colors[Math.floor(Math.random() * this.props.colors.length)],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let newColors = this.props.colors.filter(color => color !== this.state.color);
    this.setState((currState) => {
      return {
        ...currState,
        color: newColors[Math.floor(Math.random() * newColors.length)]
      }
    })
  }

  render(){
    return(
      <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick} >

      </div>
    )
  }
};

export default Box;
