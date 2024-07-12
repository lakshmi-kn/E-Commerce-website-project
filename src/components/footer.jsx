import React from 'react';

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-center">&copy; {new Date().getFullYear()} Product World</p>
      </div>
    </footer>
  );
};

export default Footer;
