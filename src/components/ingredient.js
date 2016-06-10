import React from 'react';
import {render} from 'react-dom';

class Ingredient extends React.Component {
  constructor(){
    super();
    this.state = {
      clicked: false
    };
  }

  onClick(){
    this.setState({clicked: !this.state.clicked});
    this.props.onClick(this.props.data);
  }

  render(){
    return(
      <div
        className={classNames("ingredient", {'clicked': this.state.clicked})}
        onClick={this.onClick}>
          {this.props.data.name.toLowerCase()}
      </div>
    );
  }
};

Ingredient.propTypes = {
  onClick: React.PropTypes.func
}
