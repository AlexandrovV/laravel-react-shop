import React, { Component } from 'react';

export default class Sidebar extends Component {

    constructor() {
        super();
        this.state = {
            category: {},
            products: []
        };
    };

    componentWillReceiveProps(nextState) {
        if(this.props.categoryId != nextState.categoryId || nextState.categoryId == null || nextState.brandsToFilter != null){
            var url = '';
            if(nextState.brandsToFilter != null && nextState.brandsToFilter.size > 0 && this.props.categoryId == nextState.categoryId) {
                url='/api/search';
                var result = fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        brands: Array.from(nextState.brandsToFilter),
                        categoryId: nextState.categoryId
                    })
                    
                })
                .then(results => {
                    return results.json();
                }).then(data => {
                    let products = data.map((product) => {
                        return(
                            <tr key={product.id}>
                                <td>{product.brand}</td>
                                <td>{product.name}</td>
                                <td>{product.price}$</td>
                            </tr>
                        )
                    })
                    this.setState({products: products, category: this.props.categoryId});
                });
            } else {
                if(nextState.categoryId != null) {
                    url = '/api/category/' + nextState.categoryId + '/products';
                } else {
                    url = '/api/product';
                }
           
                this.getProducts(url);
            }
        }
    }

    componentDidMount() {
        var url = '';

        if(this.props.categoryId != null) {
            url = '/api/category/' + this.props.categoryId + '/products';
        } else {
            url = '/api/product';
        }
        this.getProducts(url);
    }

    getProducts(url) {
        fetch(url)
        .then(results => {
            return results.json();
        }).then(data => {
            let products = data.map((product) => {
                return(
                    <tr key={product.id}>
                        <td>{product.brand}</td>
                        <td>{product.name}</td>
                        <td>{product.price}$</td>
                    </tr>
                )
            })
            this.setState({products: products, category: this.props.categoryId});
        })
    }
    render() {
        return (
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
        );
    }
}