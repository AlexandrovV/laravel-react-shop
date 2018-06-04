import React, { Component } from 'react';

import Sidebar from '../shared/Sidebar';
import ProductsTable from './ProductsTable';
import Filter from './Filter';

import { Link } from 'react-router-dom';

export default class ListProducts extends Component {

    constructor() {
        super();
        this.state = {
            brandsToFilter: []
        };
    }

    onFilterApply(brands) {
        this.setState({brandsToFilter: brands});
        this.render();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">All Products</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <ProductsTable categoryId={this.props.match.params.categoryId} brandsToFilter={this.state.brandsToFilter}/>
                            </div>
                            <div className="col-md-3">
                                <Filter categoryId={this.props.match.params.categoryId} onFilterApply={this.onFilterApply.bind(this)} brandsToFilter={this.state.brandsToFilter}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}