import React from 'react';
import horiseon from '../../assets/images/horiseon-webpage-screenshot.jpg';
import comendo from '../../assets/images/logo3.png';
import majin from '../../assets/images/1-majin-buu-vs-patrick-funny-anime-motivational-gym-matthew-chan.jpg';
import travel from '../../assets/images/travel.jpg';
import goku from '../../assets/images/goku-luffy.jpg';
import calendar from '../../assets/images/calendar.png';

export default function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
      <br/>
      <h3>Horiseon webpage</h3>
      <a href="https://barcar95.github.io/horiseon-accessibility/"><img src={horiseon} alt="horiseon webpage screenshot"/></a>
      <br/>
      <h3>Comendo</h3>
      <a href="https://barcar95.github.io/comendo/"><img src={comendo} alt="Comendo app"/></a>
      <br/>
      <h3>Gym Tracker App</h3>
      <a href="https://gym-trackerr-c227a2e45128.herokuapp.com/"><img src={majin} alt="Gym Tracker app"/></a>
      <br/>
      <h3>Travel App</h3>
      <a href="https://www.google.com/"><img src={travel} alt="travel app"/></a>
      <br/>
      <h3>Anime App</h3>
      <a href="https://www.google.com/"><img src={goku} alt="Anime app"/></a>
      <br/>
      <h3>Calendar App</h3>
      <a href="https://www.google.com/"><img src={calendar} alt="calendar app"/></a>
    </div>
  );
}
