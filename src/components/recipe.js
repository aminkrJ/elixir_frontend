import React from 'react';
import {render} from 'react-dom';

export default class Recipe extends React.Component {
  constructor(){
    super();
    this.state = {
      clicked: false
    }
  }

  onClick(){
    this.setState({clicked: !this.state.clicked});
    this.props.onClick(this.props.data);
  }

  render(){
    return(
      <div
        className={classNames("recipe", {'clicked': this.state.clicked})}
        onClick={this.onClick}>
        {this.props.data.title.toLowerCase()}
      </div>
    );
  }
};

