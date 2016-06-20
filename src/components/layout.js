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
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="home">home</Link></li>
                <li><Link to="home">why us?</Link></li>
                <li><Link to="home">contact</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="subscribe" className="button">
                    <button className="btn btn-primary navbar-btn">subscribe</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
};
