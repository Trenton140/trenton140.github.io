import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Trenton Tong. All rights reserved.</p>
      <p>This website is currently under development.</p>
    </footer>
  );
}

export default Footer;
