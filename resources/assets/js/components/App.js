import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Navbar from './shared/Navbar';
import ListProducts from './ListProducts';
import About from './About';
import Contacts from './Contacts';
import Home from './Home';

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/show/all/products' component={ListProducts}/>
        <Route path='/show/category/:categoryId/products' component={ListProducts}/>
      </Switch>
    </main>
  );

export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Navbar />
                <Main />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('app'));
}
