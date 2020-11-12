import React from "react";
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="search-button" to="#">
            <i className="fa fa-search"></i>
          </Link>
          <form className="form-search">
            <input type="search" placeholder="Search:" />
          </form>
          <ul className="navbar-nav m-auto">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/single">Single</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto social-list">
            <li>
              <Link to="#">
                <i className="fa fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
