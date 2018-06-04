import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
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
                    </div>
                </div>
            </nav>
        );
    }
}