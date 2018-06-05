import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            navbarRight: []
        };
    }
    componentDidMount() {
        if(!this.props.authenticated) {
            this.setState({navbarRight: (
                <ul className="navbar-nav ml-auto">
                    <li><Link className="nav-link" to="/login">Login</Link></li>
                    <li><Link className="nav-link" to="/register">Register</Link></li>
                </ul>
            )});
        }
    }
    componentWillReceiveProps() {
        if(!this.props.authenticated) {
            this.setState({navbarRight: (
                <ul className="navbar-nav ml-auto">
                    <li><Link className="nav-link" to="/login">Login</Link></li>
                    <li><Link className="nav-link" to="/register">Register</Link></li>
                </ul>
            )});
        } else {
            this.setState({navbarRight: (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <Link id="navbarDropdown" className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre="true">
                            {this.props.user.name} <span className="caret"></span>
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/">
                                Logout
                            </Link>
                            {/* <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form> */}
                        </div>
                    </li>
                </ul>
            )});
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        LARASHOP
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts">Contacts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/show/all/products">View Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/manage/products">Manage Products</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {this.state.navbarRight}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}