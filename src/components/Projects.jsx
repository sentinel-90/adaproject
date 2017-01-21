import React from 'react';

function Projects(props) {
  return (
    <section>
      <h3>{props.title}</h3>

      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#">Project-5</a>
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
    </section>
  );
}

Projects.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Projects;
