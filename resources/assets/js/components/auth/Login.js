import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            remember: false,
            errors: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                remember: false
            })
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error))
        .then(data => {
            if(data.code == 500) {
                setTimeout(() => {
                    this.setState({ 
                        errors: (
                            <div className="col-md-8">   
                                <div className="alert alert-danger alert-dismissible">   
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    Error occured
                                </div>      
                            </div> 
                        )
                    })
                }, 0);
            } else {
                this.props.auth(data[0]);
                this.props.history.push("/");
            }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    {this.state.errors}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    {/* @csrf */}
                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-sm-4 col-form-label text-md-right">E-Mail Address</label>
                                        <div className="col-md-6">
                                            <input id="email" type="email" className="form-control" name="email" required autoFocus onChange={this.handleChange}/>
                                            {/* @if ($errors->has('email'))
                                                <span className="invalid-feedback">
                                                    <strong>{{ $errors->first('email') }}</strong>
                                                </span>
                                            @endif */}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control" name="password" required onChange={this.handleChange}/>
                                            {/* @if ($errors->has('password'))
                                                <span className="invalid-feedback">
                                                    <strong>{{ $errors->first('password') }}</strong>
                                                </span>
                                            @endif */}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-6 offset-md-4">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" name="remember"/> Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Login
                                            </button>
                                            <Link className="btn btn-link" to="/forgot/password">
                                                Forgot Your Password?
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);