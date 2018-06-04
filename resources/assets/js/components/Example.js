import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Navbar from './shared/Navbar';
import ListProducts from './ListProducts';
import About from './About';

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={ListProducts}/>
        <Route path='/about' component={About}/>
        <Route path='/show/all/products' component={ListProducts}/>
        <Route path='/show/category/:categoryId/products' component={ListProducts}/>
      </Switch>
    </main>
  );

export default class Example extends Component {
    render() {
        return (
            <div className="wrapper">
                <Navbar />
                <Main />
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(
    <BrowserRouter>
        <Example />
    </BrowserRouter>
    , document.getElementById('example'));
}
