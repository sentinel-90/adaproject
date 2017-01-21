import React from 'react';
import ReactDOM from 'react-dom';

import Component from './Component';

import $ from 'jquery';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';

import '../node_modules/bootstrap/scss/bootstrap.scss';
import './screen.scss';

function App() {
  return (
    <main>
      <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">aDa project</a>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Help</a>
            </li>
          </ul>
          <span className="navbar-text">aDa is the best of my inventions</span>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">

            <h3>Projects</h3>

            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">Project-1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Project-2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Project-3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Project-4</a>
              </li>
            </ul>

            <h3>Team</h3>

            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">User-1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">User-2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">User-3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">User-4</a>
              </li>
            </ul>
          </nav>

          <div className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
            <h1>Dashboard</h1>

            <nav className="navbar navbar-toggleable-md navbar-light bg-faded list-type">
              <button className="btn btn-secondary active" type="button">Tasks for today</button>
              <button className="btn btn-secondary" type="button">Sprint</button>
              <button className="btn btn-secondary" type="button">All tasks</button>
            </nav>
          </div>
        </div>
      </div>
    </main>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
