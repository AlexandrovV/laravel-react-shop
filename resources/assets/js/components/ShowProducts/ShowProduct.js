import React, { Component } from 'react';

export default class ShowProduct extends Component {

    constructor() {
        super();
        this.state = {
            product: {}
        };
    }

    componentDidMount() {
        console.log(this.props.match.params.productId);
        var url = '/api/product/' + this.props.match.params.productId;
        fetch(url)
        .then(results => {
            return results.json();
        }).then(product => {
            this.setState({product: product});
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={this.state.product.image} />
                    </div>
                    <div className="col-md-9">
                        <h3>{this.state.product.name}</h3>
                        <hr/>
                        <h4>{this.state.product.brand}</h4>
                        <hr/>
                        <h4>{this.state.product.price}$</h4>
                    </div>
                </div>
            </div>
        );
    }
}