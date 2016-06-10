import React from 'react';
import {render} from 'react-dom';

import RecipeFilter from './components/recipe_filter';
import Ingredient from './components/ingredient';
import Ingredients from './components/ingredients';
import Recipes from './components/recipes';
import Recipe from './components/recipe';

require('./styles/style.scss');

render(<RecipeFilter/>, document.getElementById('app'));
