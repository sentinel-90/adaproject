import React from 'react';

function Header(props) {
  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      
      <a className="navbar-brand" href="/">{props.title}</a>

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
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Header;
