import React from 'react';
import {render} from 'react-dom';

export default class Recipes extends React.Component {
  render(){
    var recipeNodes = this.props.data.map(function(data){
      return(
        <Recipe
          key={data.id}
          data={data}
          onClick={this.props.onRecipeClick}/>
      );
    }, this);
    return(
      <div className="Recipes col-md-4">
        {recipeNodes}
      </div>
    );
  }
};

Recipes.propTypes = {
  visible: React.PropTypes.bool
}
