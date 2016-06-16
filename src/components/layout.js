import React from 'react';
import {render} from 'react-dom';
import RecipeFilter from './recipe_filter.js';
import { Router, Route, Link, browserHistory} from 'react-router';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ul>
          <li><Link to="subscribe">subscribe</Link></li>
          <li><Link to="halo">halo</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
};
