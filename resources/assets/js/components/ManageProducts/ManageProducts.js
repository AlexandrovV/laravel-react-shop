import React, { Component } from 'react';

import ProductsTable from './ProductsTable';
import ManageForm from './ManageForm';

export default class ManageProducts extends Component {
    render() {
        return (
                <div className="container">
                    <ManageForm productId={this.props.match.params.productId} />
                    <br />
                    <ProductsTable productId={this.props.match.params.productId}/>
                </div>
        );
    }
}