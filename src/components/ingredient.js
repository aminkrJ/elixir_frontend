import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';

export default class Ingredient extends React.Component {
  constructor(props){
    super(props);
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
        onClick={this.onClick.bind(this)}>
          {this.props.data.name.toLowerCase()}
      </div>
    );
  }
};

Ingredient.propTypes = {
  onClick: React.PropTypes.func
}
