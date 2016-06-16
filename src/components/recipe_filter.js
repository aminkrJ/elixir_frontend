import React from 'react';
import {render} from 'react-dom';
import Ingredients from './ingredients';
import Recipes from './recipes';
import Recipe from './recipe';
import $ from 'jquery';
import _ from 'underscore';
import NProgress from 'react-nprogress';

export default class RecipeFilter extends React.Component {
  constructor(props){
    super(props);
    this.ingredientIds = [];
    this.state = {
      ingredients: [],
      recipes: []
    }
  }

  updateIngredientIds(id) {
    if(_.contains(this.ingredientIds, id)){
      this.ingredientIds = _.without(this.ingredientIds, id)
    }else{
      this.ingredientIds = this.ingredientIds.concat(id)
    }
  }

  componentDidMount(){
    this.loadIngredients();
  }

  loadIngredients(){
    $.ajax({
      url: this.props.ingredients_path,
      dataType: 'json',
      type: 'GET',
      cache: false,
      beforeSend: function(){
        NProgress.start();
      },
      success: function(data){
        NProgress.done();
        this.setState({ ingredients: data });
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  handleIngredientClick(ingredient){
    this.updateIngredientIds(ingredient.id);
    $.ajax({
      url: this.props.recipes_path,
      dataType: 'json',
      data: {ids: this.ingredientIds},
      type: 'GET',
      cache: false,
      success: function(data){
        this.setState({ recipes: data });
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  handleRecipeClick(recipe){
  }

  render(){
    return (
      <div className="recipeFilter">
        <Ingredients
          data={this.state.ingredients}
          onIngredientClick={this.handleIngredientClick.bind(this)}
        />
        <Recipes
          data={this.state.recipes}
          onRecipeClick={this.handleRecipeClick}
        />
      </div>
    );
  }
};

RecipeFilter.defaultProps = {
  ingredients_path: "https://elixir-prod.herokuapp.com/ingredients.json",
  recipes_path: "https://elixir-prod.herokuapp.com/recipes.json"
};
