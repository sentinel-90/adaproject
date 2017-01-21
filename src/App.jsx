import React from 'react';
import ReactDOM from 'react-dom';

import Component from './Component';

import $ from 'jquery';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';

import '../node_modules/bootstrap/scss/bootstrap.scss';
// import '../node_modules/font-awesome/scss/font-awesome.scss';
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
              <li className="nav-item">
                <button type="button" className="btn btn-primary">Add project</button>
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
              <li className="nav-item">
                <button type="button" className="btn btn-primary">Add member</button>
              </li>
            </ul>
          </nav>

          <div className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
            <ul className="nav nav-tabs mb-3">
              <li className="nav-item">
                <a className="nav-link active" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Calendar</a>
              </li>
            </ul>

            <h1>Dashboard</h1>

            <nav className="navbar navbar-toggleable-md navbar-light bg-faded list-type">
              <button className="btn btn-secondary active" type="button">Tasks for today</button>
              <button className="btn btn-secondary" type="button">Sprint</button>
              <button className="btn btn-secondary" type="button">All tasks</button>
            </nav>

            <div className="task-block">
              <div className="row">
                <div className="col">
                  <div className="task-list bg-faded p-3">
                    <button type="button" className="btn btn-primary mb-3">Add task</button>

                    <div className="list-group">
                      <a href="#" className="list-group-item list-group-item-action active">Task 1</a>
                      <a href="#" className="list-group-item list-group-item-action">Забить Ксюшу ржавой арматурой</a>
                      <a href="#" className="list-group-item list-group-item-action">Task 2</a>
                      <a href="#" className="list-group-item list-group-item-action">Task 3</a>
                      <a href="#" className="list-group-item list-group-item-action">Task 4</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="task-list bg-faded p-3">
                    <div className="task-content">
                      <button type="button" className="btn btn-primary float-right">Complete</button>
                      <h2>Task 1</h2>
                      <p>1) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>2) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>3) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>4) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>5) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
