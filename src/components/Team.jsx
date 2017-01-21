import React from 'react';

function Team(props) {
  return (
    <section>
      <h3>{props.title}</h3>

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
    </section>
  );
}

Team.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Team;
