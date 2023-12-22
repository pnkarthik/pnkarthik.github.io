import React, { useRef, useState } from "react";
import cn from "classnames";

const Header = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);
  const [activeNavItem, setActiveNavItem] = useState('Home');

  const navOptions = [
    { name: 'Home', link: '/' },
    { name: 'Bio', link: '#/bio' },
    { name: 'Publications', link: '#/publications' },
    { name: 'Talks', link: '#/talksAndSeminars' },
    { name: 'Teaching', link: '#/teaching' },
    { name: 'Collaborators', link: '#/collaborators' },
    { name: 'Blogs', link: '#/blogs' }
  ]

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
            {navOptions?.map((navItem) => (
              <a className={`nav-item nav-link ${activeNavItem === navItem?.name && 'activeNavItem'}`} onClick={() => { collapseNav(); scrollToTop(); setActiveNavItem(navItem?.name) }} href={navItem?.link}>{navItem?.name}</a>
            ))}
            {/* <a className="nav-item nav-link" onClick={() => { collapseNav(); scrollToTop(); }} href="/">Home</a>
            <a className="nav-item nav-link" onClick={() => { collapseNav(); scrollToTop(); }} href="#/bio">Bio</a>
            <a className="nav-item nav-link" onClick={() => { collapseNav(); scrollToTop(); }} href="#/publications">Publications</a>
            <a className="nav-item nav-link" onClick={() => { collapseNav(); scrollToTop(); }} href="#/talksAndSeminars">Talks</a>
            <a className="nav-item nav-link" onClick={() => { collapseNav(); scrollToTop(); }} href="#/teaching">Teaching</a>
            <a className="nav-item nav-link" onClick={() => { collapseNav(); scrollToTop(); }} href="#/collaborators">Collaborators</a>
            <a className="nav-item nav-link" onClick={() => { collapseNav(); scrollToTop(); }} href="#/blogs">Blogs</a> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;