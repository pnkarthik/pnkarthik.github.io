import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer d-flex flex-row">
        <span>Credits: Srividya BV</span>
        <span>© 2023 Copyright:</span>
        <p>{document.lastModified}</p>
      </div>
    </footer>
  );
}

export default Footer;