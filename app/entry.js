import React from 'react';
import {render} from 'react-dom';

import RecipeFilter from './js/recipe_filter';
import Ingredient from './js/ingredient';
import Ingredients from './js/ingredients';
import Recipes from './js/recipes';
import Recipe from './js/recipe';

require('./css/style.css');

render(<RecipeFilter/>, document.getElementById('app'));
