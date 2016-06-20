import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import RecipeFilter from './components/recipe_filter';
import Layout from './components/layout';
import Ingredient from './components/ingredient';
import Ingredients from './components/ingredients';
import Recipes from './components/recipes';
import Recipe from './components/recipe';
import Subscribe from './components/subscribe';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-nprogress/nprogress.css';

require('./styles/style.scss');

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={RecipeFilter}/>
      <Route path="home" component={RecipeFilter}/>
      <Route path="subscribe" component={Subscribe}/>
    </Route>
  </Router>
), document.getElementById('app'));
