import React from 'react';
import './App.css';

import { FaLinkedin, FaGithub, FaItchIo } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <main>
        <h1>
          <b>&lt;</b>
          &nbsp;
          <b>H</b>
          <b>e</b>
          <b>y</b>
          <b>
            <i>!</i>
          </b>
          <b>
            <i>!</i>
          </b>
          &nbsp;
          <b>&gt;</b>
        </h1>
        <br />
        <p>The biggest dog around making websites and games! 😎🤙</p>
        <br />
        <a href="https://www.linkedin.com/in/cooldotty/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/CoolDotty">
          <FaGithub />
        </a>
        <a href="https://cooldotty.itch.io/">
          <FaItchIo />
        </a>
      </main>
    </div>
  );
}

export default App;
