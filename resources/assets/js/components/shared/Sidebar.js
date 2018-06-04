import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

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
                <p className="lead">Choose category:</p>

                <div className="list-group">
                    <Switch>
                        <Route exact path='/'>
                            <Link to='/show/all/products' className="list-group-item">Show all products</Link>
                        </Route>
                    </Switch>
                    {this.state.categories}
                </div>
		    </div>
        );
    }
}