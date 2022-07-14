import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-item nav-link">Home</Link>
            {/* <a className="nav-item nav-link" href="/">Bio</a> */}
            <Link to="/publications" className="nav-item nav-link">Publications</Link>
            {/* <a className="nav-item nav-link" href="/">Talks/Seminars</a>
            <a className="nav-item nav-link" href="/">Teaching</a>
            <a className="nav-item nav-link" href="/">Blogs</a> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;