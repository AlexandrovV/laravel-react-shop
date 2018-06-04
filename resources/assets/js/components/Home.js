import React, { Component } from 'react';

import Sidebar from './shared/Sidebar';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h1>Home page</h1>
                        <hr />
                        <p>This is home page</p>
                    </div>
                </div>
            </div>
        );
    }
}