import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductsTable extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
        };
    };

    componentWillReceiveProps(nextState) {
        if(nextState.productId == null){
            this.componentWillMount();
        }
    }

    componentWillMount() {
        this.getProducts();
    }

    getProducts() {
        fetch('/api/product')
        .then(results => {
            return results.json();
        }).then(data => {
            console.log(data);
            let products = data.map((product) => {
                return(
                    <tr key={product.id}>
                        <td>{product.brand}</td>
                        <td><Link to={'/manage/product/'+product.id}>{product.name}</Link></td>
                        <td>{product.price}$</td>
                    </tr>
                )
            })
            this.setState({products: products});
        })
        console.log('fetched');
    }

    render() {
        return (
            <div className="row">
                <p hidden>{this.state.refresh}</p>
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table id="productListTable" className="table table-striped table-borderd">
                            <thead>
                                <tr>
                                    <th>Brand</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.products}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}