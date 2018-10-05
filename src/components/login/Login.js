import React, { Component } from 'react';
import logo from '../../logo.svg';
import ModalBootstrap from '../modal/ModalBootstrap';
import './Login.css'

class Login extends Component {
    title = 'Estacionamiento Ceiba';
    user = 'Usuario';
    pass = 'Contraseña';
    login = 'Iniciar Sesión';
    parameters = { username: '', password: '' };

    constructor() {
        super();
        this.state = { data: [] };
        this.signIn = this.signIn.bind(this);
    }

    signIn(e) {
        e.preventDefault();

        this.parameters.username = 'jd';
        this.parameters.p4ssw0rd = '12345llceiba';
        let url = 'http://localhost:8080/keeper/login';

        fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.parameters)
        })
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    this.render(<ModalBootstrap />);
                    throw console.log();
                    ;
                }
            })
            .then(response => console.log("ok"))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className='Login bg-dark p-2'>
                <div className='container m-2'>
                    <div className='row'>
                        <div className='card bg-info col-xs-11 col-sm-8 col-md-6 col-lg-4 text-center p-2'>
                            <div className='card-header'>
                                <div className='col-sm-12'>
                                    <img src={logo} className="App-logo" alt="logo" />
                                </div>
                                <div className='col-sm-12'>
                                    <h4>{this.title}</h4>
                                </div>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.signIn}>
                                    <div className="form-group">
                                        <label htmlFor="usr">{this.user}</label>
                                        <input type="text" className="form-control" id="usr" /* required */ autoFocus />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">{this.pass}</label>
                                        <input type="password" className="form-control" id="pwd" /* required */ />
                                    </div>
                                    <button type="submit" className="btn btn-lg btn-success">
                                        {this.login}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;