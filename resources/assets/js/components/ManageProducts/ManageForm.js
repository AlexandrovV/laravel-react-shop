import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class ManageProducts extends Component {

    constructor() {
        super();
        this.state = {
            categories: [],
            productId: -1,
            productName: '',
            productBrand: '',
            productPrice: '',
            categoryId: -1,
            messages: [],
            error: false,
        };
        this.url = '/api/product';
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextState) {
        if(nextState.productId != null) {
            this.setState({productId: nextState.productId});
            this.url = '/api/product/' + nextState.productId;
            this.getProduct(nextState.productId);
        } else {
            this.state.productName = '';
            this.state.productBrand = '';
            this.state.productPrice = '';
            this.state.categoryId = -1;
        }
        this.getCategories();
        
    }

    componentDidMount() {
        if(this.props.productId != null) {
            this.setState({productId: this.props.productId});
            this.url = '/api/product/' + this.props.productId;
            this.getProduct(this.props.productId);
        }
        this.getCategories();
    }

    getProduct(id) {
        fetch('/api/product/'+id)
        .then(results => {
            return results.json();
        }).then(product => {
            this.setState({productName: product.name, productBrand: product.brand, productPrice: product.price, categoryId: product.category_id});
        });
    }

    getCategories() {
        fetch('/api/category')
        .then(results => {
            return results.json();
        }).then(data => {
            let categories = data.map((category) => {
                return(
                    <option key={category.id} value={category.id}>{category.name}</option>
                )
            })
            this.setState({categories: categories});
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        var method = 'POST';
        if(this.state.productId != null) {
            method = 'PUT';
        }
        fetch(this.url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.productName,
                brand: this.state.productBrand,
                price: this.state.productPrice,
                category_id: this.state.categoryId,
                image: "noimage.jpg"
            })
        })
        .then((response) => {
            if(response.status != 200 && response.status != 201) {
                throw new Error('error');
            }
        })
        .catch((error) => {
            setTimeout(() => {
                this.setState({ 
                    messages: (
                        <div className="offset-md-2 col-md-8">   
                            <div className="alert alert-danger alert-dismissible">   
                                <button type="button" className="close" data-dismiss="alert">&times;</button>
                                Error occured
                            </div>      
                        </div> 
                    ),
                    error: true 
                })
            }, 0);
        })
        this.state.productName = '';
        this.state.productBrand = '';
        this.state.productPrice = '';
        this.state.categoryId = -1;
        if(!this.state.error){
            setTimeout(() => {this.setState({ messages: (
                <div className="offset-md-2 col-md-8">   
                    <div className="alert alert-success alert-dismissible">   
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        The product was successfully added
                    </div>      
                </div> 
            )})}, 0);
            this.props.history.push("/manage/products");
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="row">
                {this.state.messages}
                <div className="offset-md-2 col-md-8">
                    <div className="card">
                        <div className="card-header">
                            Create product
                        </div>
                        <div className="card-body">
                            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label className="control-label col-md-4" htmlFor="name">Enter Product Name</label>
                                    <div className="col-md-8">
                                        <input type="text" path="name" id="name" placeholder="Product name" className="form-control"
                                             name="productName" value={this.state.productName} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-4" htmlFor="brand">Enter Brand Name</label>
                                    <div className="col-md-8">
                                        <input type="text" path="brand" id="brand" placeholder="Brand name" className="form-control"
                                             name="productBrand" value={this.state.productBrand} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-4" htmlFor="unitPrice">Enter Unit Price: </label>
                                    <div className="col-md-8">
                                        <input type="number" path="unitPrice" id="unitPrice" placeholder="Unit Price In $" className="form-control"
                                            name="productPrice" value={this.state.productPrice} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-md-4" htmlFor="categoryId">Select Category: </label>
                                    <div className="col-md-8">
                                        <select className="form-control" id="categoryId" name="categoryId" onChange={this.handleChange}>
                                            <option selected disabled hidden>Choose category</option>
                                            {this.state.categories}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-offset-4 col-md-8">
                                        <input type="submit" name="submit" id="submit" value="Submit" className="btn btn-primary"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ManageProducts);