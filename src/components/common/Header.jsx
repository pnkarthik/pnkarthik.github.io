import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [mobileView, setMobileView] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const navOptions = [
    { name: "Home", link: "/" },
    { name: "Bio", link: "#/bio" },
    {
      name: "Research",
      link: "#/research",
      children: [
        { name: "Publications", link: "#/publications" },
        { name: "Talks", link: "#/talksAndSeminars" },
        { name: "Collaborators", link: "#/collaborators" },
      ],
    },
    {
      name: "Teaching",
      link: "#/teaching",
      children: [
        { name: "Courses", link: "#/courses" },
        { name: "Testimonials", link: "#/testimonials" },
        { name: "Teaching Philosophy", link: "#/teachingPhilosophy" },
      ],
    },
    { name: "Blogs", link: "#/blogs" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 992); // Bootstrap lg breakpoint
    };
    handleResize(); // initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const collapseNav = () => {
    navButton.current?.classList.add("collapsed");
    linksContainerRef.current?.classList.remove("show");
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  const handleAccordionToggle = (name) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-background">
      <button
        ref={navButton}
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        ref={linksContainerRef}
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <div className="navbar-nav navbar-margin w-100 d-flex justify-content-center">
          {navOptions.map((navItem, index) => {
            const isActive = activeNavItem === navItem.name;

            if (navItem.children) {
              if (mobileView) {
                const isOpen = openAccordion === navItem.name;

                return (
                  <div key={navItem.name} className="w-100">
                    <div
                      className={`nav-item nav-link accordion-toggle d-flex justify-content-between align-items-center ${
                        isOpen ? "activeNavItem" : ""
                      }`}
                      onClick={() => handleAccordionToggle(navItem.name)}
                    >
                      <span>{navItem.name}</span>
                      {isOpen ? <i className="fas fa-angle-up" /> : <i className="fas fa-angle-down" />}
                      {/* <span className="arrow-icon">{isOpen ? "▲" : "▼"}</span> */}
                    </div>
                    {isOpen && (
                      <div className="accordion-body ps-3">
                        {navItem.children.map((child) => {
                          const isChildActive = activeNavItem === child.name;
                          return (
                            <a
                              key={child.name}
                              className={`nav-item nav-link ps-3 ${
                                isChildActive ? "activeNavItem" : ""
                              }`}
                              href={child.link}
                              onClick={() => {
                                collapseNav();
                                scrollToTop();
                                setActiveNavItem(child.name);
                              }}
                            >
                              {child.name}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <div className="dropdown" key={navItem.name}>
                    <a
                      className={`nav-item nav-link dropdown-toggle ${
                        isActive ? "activeNavItem" : ""
                      }`}
                      id={`${navItem.name}-dropdown`}
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-display="static"
                    >
                      {navItem.name}
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby={`${navItem.name}-dropdown`}
                    >
                      {navItem.children.map((child) => {
                        const isChildActive = activeNavItem === child.name;
                        return (
                          <li key={child.name}>
                            <a
                              className={`dropdown-item ${
                                isChildActive ? "activeNavItem" : ""
                              }`}
                              href={child.link}
                              onClick={() => {
                                collapseNav();
                                scrollToTop();
                                setActiveNavItem(child.name);
                              }}
                            >
                              {child.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              }
            } else {
              return (
                <a
                  key={index}
                  className={`nav-item nav-link ${
                    isActive ? "activeNavItem" : ""
                  }`}
                  href={navItem.link}
                  onClick={() => {
                    collapseNav();
                    scrollToTop();
                    setActiveNavItem(navItem.name);
                  }}
                >
                  {navItem.name}
                </a>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
