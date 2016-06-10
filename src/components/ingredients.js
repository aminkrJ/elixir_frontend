import React from 'react';
import {render} from 'react-dom';

export default class Ingredients extends React.Component {
  constructor(){
    super();
  }

  render(){
    var ingredientNodes = this.props.data.map(function(data){
      return(
        <Ingredient
          key={data.id}
          data={data}
          onClick={this.props.onIngredientClick} />
      );
    }, this);
    return(
      <div className="Ingredients col-md-4">
        {ingredientNodes}
      </div>
    );
  }
};

Ingredients.propTypes = {
  onIngredientClick: React.PropTypes.func
}
