import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../app/App.css';

class Navigation extends Component {
  title = 'Estacionamiento';
  home = 'Inicio';
  tcrm = 'TCRM';
  listHistory = 'Historial';
  listVehicles = 'Vehículos Registrados';
  logout = 'Cerrar Sesión';
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="text-white navbar-brand abs">
          <img src={logo} className="App-logo" alt="logo" />
          {this.title}
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="collapsingNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="">{this.home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">{this.tcrm}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">{this.listHistory}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="" data-toggle="collapse">{this.listVehicles}</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">{this.logout}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;