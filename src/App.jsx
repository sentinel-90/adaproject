import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Projects from './components/Projects';
import Team from './components/Team';
import TaskDetail from './components/TaskDetail';
import TaskList from './components/TaskList';

import './screen.scss';

function App(props) {
  return (
    <main>

      <Header title="aDa project" />

      <div className="container-fluid">
        <div className="row">
          <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">

            <Projects title="Projects" />

            <Team title="Team" />

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
                  <TaskList />
                </div>
                <div className="col">
                  <div className="task-detail bg-faded p-3">
                    <TaskDetail title="Task 2" />
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
