import React from 'react';
import './TeenHealth.css';

function TeenHealth() {
  return (
    <div className="App">
        <div className="App-teen-health">
      <header><center>
        <h1>Teen Health Resources</h1>
        <p>Your source for reliable teen health information</p>
        </center>
      </header>

      <div className="container">
        <div className="section">
          <h2>Healthy Eating</h2>
          <p>Learn about balanced diets, important nutrients, and maintaining a healthy weight.</p>
        </div>

        <div className="section">
          <h2>Physical Activity</h2>
          <p>Discover the benefits of regular exercise and tips for staying active.</p>
        </div>

        <div className="section">
          <h2>Mental Health</h2>
          <p>Find resources for managing stress, anxiety, and building strong emotional well-being.</p>
        </div>

        <div className="section">
          <h2>Sexual Education</h2>
          <p>Learn about safe practices, consent, and understanding your body.</p>
        </div>

        <div className="section">
          <h2>Substance Abuse</h2>
          <p>Get information on the risks of drug and alcohol use and available support.</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default TeenHealth;
