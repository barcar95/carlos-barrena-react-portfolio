import React from 'react';
import download from '../../assets/images/download-icon.png';



export default function Resume() {
  return (
    <div>
      <h3>Front-end</h3>
      <ul>
        <li>
        Nunc pharetra 
        </li>
        <li>
        mauris
        </li>
        <li>
        fermentum
        </li>
      </ul>
      <h3>Back-end</h3>
      <ul>
        <li>
        diam
        </li>
        <li>
        faucibus
        </li>
        <li>
        tus tincidunt
        </li>
      </ul>
       <a href="Carlos-Barrena-Resume.pdf" download><img src={download} alt="download icon"/>Download Resume</a> 
    </div>
  );
}