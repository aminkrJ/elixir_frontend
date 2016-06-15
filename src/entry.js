import React from 'react';
import {render} from 'react-dom';

import RecipeFilter from './components/recipe_filter';
import Ingredient from './components/ingredient';
import Ingredients from './components/ingredients';
import Recipes from './components/recipes';
import Recipe from './components/recipe';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-nprogress/nprogress.css';

require('./styles/style.scss');

render(<RecipeFilter ingredients_path="https://elixir-prod.herokuapp.com/ingredients.json"
                     recipes_path="https://elixir-prod.herokuapp.com/recipes.json" />, document.getElementById('app'));
