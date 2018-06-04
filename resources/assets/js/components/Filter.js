import React, { Component } from 'react';

import Sidebar from './shared/Sidebar';

export default class Filter extends Component {

    constructor() {
        super();
        this.state = {
            categoryId: {},
            brands: [],
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentWillReceiveProps(nextState) {
        console.log(this.selectedCheckboxes);
        console.log(this.props.categoryId);
        console.log(nextState.categoryId);
        console.log(this.props.categoryId != nextState.categoryId);
        if(this.props.categoryId != nextState.categoryId) {
            this.selectedCheckboxes = new Set();
        } else {
            this.selectedCheckboxes = nextState.brandsToFilter;
        }
        var brandUrl = '';
        if(nextState.categoryId == null) {
            brandUrl = '/api/brands';
        } else {
            brandUrl = '/api/category/'+nextState.categoryId+'/brands';
        }

        this.getBrands(brandUrl);
    }

    componentDidMount() {
        var brandUrl = '';
        if(this.props.categoryId == null) {
            brandUrl = '/api/brands';
        } else {
            brandUrl = '/api/category/'+this.props.categoryId+'/brands';
        }
        this.getBrands(brandUrl);
    }

    getBrands(brandUrl) {
        if(this.selectedCheckboxes == null) {
            this.selectedCheckboxes = new Set();
        }

        fetch(brandUrl)
        .then(results => {
            return results.json();
        }).then(data => {
            let brands = data.map((brand) => {
                return(
                    <div key={brand.brand} className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name={brand.brand} onChange={(e) => this.handleOnChange(brand.brand, e)}/> {brand.brand}
                        </label>
                    </div>
                )
            })
            this.setState({brands: brands});
        });
    }
    
    handleOnChange(name, event) {
        if(this.selectedCheckboxes.has(name)){
            this.selectedCheckboxes.delete(name);
        } else {
            this.selectedCheckboxes.add(name);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onFilterApply(this.selectedCheckboxes);
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <h3>Filter</h3>
                    <hr/>
                    <div className="form-group">
                        <label>Choose brand:</label>
                        {this.state.brands}
                    </div>
                    <button type="submit" className="btn btn-primary">Show</button>
                </form>
        );
    }
}