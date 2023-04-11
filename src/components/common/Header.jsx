import React, { useRef } from "react";

const Header = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  const collapseNav = () => {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-background">
        <button ref={navButton} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={linksContainerRef} className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav navbar-margin">
            <a className="nav-item nav-link" onClick={() => { collapseNav(); scrollToTop(); }} href="/">Home</a>
            <a className="nav-item nav-link" onClick={() => { collapseNav(); scrollToTop(); }} href="#/bio">Bio</a>
            <a className="nav-item nav-link" onClick={() => { collapseNav(); scrollToTop(); }} href="#/publications">Publications</a>
            <a className="nav-item nav-link" onClick={() => { collapseNav(); scrollToTop(); }} href="#/talksAndSeminars">Talks/Seminars</a>
            <a className="nav-item nav-link" onClick={() => { collapseNav(); scrollToTop(); }} href="#/teaching">Teaching</a>
            <a className="nav-item nav-link" onClick={() => { collapseNav(); scrollToTop(); }} href="#/blogs">Blogs</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;