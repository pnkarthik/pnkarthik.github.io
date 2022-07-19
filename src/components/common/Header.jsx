import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto">
            <a className="nav-item nav-link" href="/">Home</a>
            {/* <a className="nav-item nav-link" href="/bio">Bio</a> */}
            <a className="nav-item nav-link" href="#/publications">Publications</a>
            <a className="nav-item nav-link" href="#/talksAndSeminars">Talks/Seminars</a>
            <a className="nav-item nav-link" href="#/teaching">Teaching</a>
            {/* <a className="nav-item nav-link" href="/">Blogs</a> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;