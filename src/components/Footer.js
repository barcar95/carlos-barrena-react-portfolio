import React from 'react';
import github from '../assets/images/github-icon.webp';
import linkedin from '../assets/images/linkedin-icon.png';
import leetcode from '../assets/images/leetcode-icon.webp';


const Footer = () => {
  return (
    <footer className="">
      <div className="">
        <a href="https://github.com/barcar95"><img src={github} alt="github icon"/></a>
        <a href="https://www.linkedin.com/in/carlos-barrena-629b3820b/"><img src={linkedin} alt="linkedIn icon"/></a>
        <a href="https://leetcode.com/barcar0812/"><img src={leetcode} alt="Leetcode icon"/></a>
      </div>
    </footer>
  );
};

export default Footer;
