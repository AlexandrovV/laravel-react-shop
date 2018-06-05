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
import Login from './auth/Login';
import Register from './auth/Register';

// const Main = () => (
//     <main>
//       <Switch>
//         <Route exact path='/' component={Home}/>
//         <Route path='/login' component={Login}/>
//         <Route path='/register' component={Register}/>
//         <Route path='/about' component={About}/>
//         <Route path='/contacts' component={Contacts}/>
//         <Route path='/show/all/products' component={ListProducts}/>
//         <Route path='/show/product/:productId' component={ShowProduct}/>
//         <Route path='/show/category/:categoryId/products' component={ListProducts}/>
//         <Route path='/manage/products' component={ManageProducts}/>
//         <Route path='/manage/product/:productId' component={ManageProducts}/>
//       </Switch>
//     </main>
//   );

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            authenticated: false
        };
        this.auth = this.auth.bind(this);
    }

    auth(user) {
        this.setState({user: user, authenticated: true});
    }

    render() {
        return (
            <div className="wrapper">
                <Navbar user={this.state.user} authenticated={this.state.authenticated} />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' render={(props) => <Login {...props} auth={this.auth} />} />
                    <Route path='/register' component={Register}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contacts' component={Contacts}/>
                    <Route path='/show/all/products' component={ListProducts}/>
                    <Route path='/show/product/:productId' component={ShowProduct}/>
                    <Route path='/show/category/:categoryId/products' component={ListProducts}/>
                    <Route path='/manage/products' component={ManageProducts}/>
                    <Route path='/manage/product/:productId' component={ManageProducts}/>
                </Switch>
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
