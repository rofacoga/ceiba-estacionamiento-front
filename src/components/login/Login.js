import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../app/App.css';
import './Login.css'

class Login extends Component {
    title = 'Estacionamiento Ceiba';
    user = 'Usuario';
    pass = 'Contraseña';
    login = 'Iniciar Sesión';
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
                            <div className="form-group">
                                <label htmlFor="usr">{this.user}</label>
                                <input type="text" className="form-control" id="usr" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">{this.pass}</label>
                                <input type="password" className="form-control" id="pwd" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                {this.login}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Login;