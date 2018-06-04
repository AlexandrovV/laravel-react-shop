import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Navbar from './shared/Navbar';
import ListProducts from './ShowProducts/ListProducts';
import About from './About';
import Contacts from './Contacts';
import Home from './Home';
import ShowProduct from './ShowProducts/ShowProduct';
import ManageProducts from './ManageProducts/ManageProducts';

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/show/all/products' component={ListProducts}/>
        <Route path='/show/product/:productId' component={ShowProduct}/>
        <Route path='/show/category/:categoryId/products' component={ListProducts}/>
        <Route path='/manage/products' component={ManageProducts}/>
        <Route path='/manage/product/:productId' component={ManageProducts}/>
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
