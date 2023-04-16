import React from 'react';
import "./Footer.css"

const  Footer = () => {
  return (
    <footer className='publicfooter'>
      <div className="footer-row">
        <p>&copy; {new Date().getFullYear()} ARTFOLIO All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
