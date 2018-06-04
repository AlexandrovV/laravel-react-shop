import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {

    constructor() {
        super();
        this.state = {
            categories: [],
        };
    }

    componentDidMount() {
        fetch('/api/category')
        .then(results => {
            return results.json();
        }).then(data => {
            let categories = data.map((category) => {
                return(
                    <Link key={category.id} to={'/show/category/'+category.id+'/products'} params={{ categoryId: category.id}} className="list-group-item">{category.name}</Link>
                )
            })
            this.setState({categories: categories});
        })
    }

    render() {
        return (
            <div className="sidebar">
                <p className="lead">Category</p>

                <div className="list-group">
                    {this.state.categories}
                </div>
		    </div>
        );
    }
}