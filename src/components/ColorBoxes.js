import React, { Component } from 'react';
import Box from './Box';

class ColorBoxes extends Component {

  static defaultProps = {
    colors : ['aqua', 'white', 'red', 'blue', 'teal', 'purple', 'green', 'maroon', 'brown', 'olive', 'yellow', 'grey', 'lavender']
  }

  constructor(props){
    super(props);
    this.state = {

    }
  }

  createColumns(i){
    let arr = [];
    for (var j = 0; j < 6; j++) {
      arr.push(
        <div key={j} className="col-sm-2">
          <Box colors={this.props.colors} />
        </div>
      )
    }
    return arr;
  }

  createRows(){
    let arr = [];
    for (var i = 0; i < 4; i++) {
        arr.push(
          <div key={i} className="row">
            {this.createColumns()}
          </div>
      )
    }
   return arr;
  }

  render(){
    return(
      <div className="Color-Boxes">
        <div className="container">
          <h2>Fliping color boxes</h2>
          <br/>
          {this.createRows()}
        </div>
      </div>
    )
  }
};

export default ColorBoxes;
