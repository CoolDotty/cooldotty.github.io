import React from 'react';

import { FaLinkedin, FaGithub, FaItchIo } from 'react-icons/fa';

function App() {
  return (
    <div className="mx-auto my-2 grid min-h-screen max-w-[45em] place-items-center">
      <main className="tv-static relative mx-2 mb-40 max-w-full overflow-hidden rounded-lg border-2 border-black bg-black/75 p-3 pb-32 text-center font-simply-best text-3xl text-white text-shadow-lg max-[550px]:pb-20">
        <h1 className="mb-4 inline-block pt-20 font-mini-pizza text-8xl max-[550px]:pt-10 max-[550px]:text-5xl">
          <b
            className="text-outline-red inline-block animate-up-down"
            style={{ animationDelay: '0s' }}
          >
            &lt;
          </b>
          &nbsp;
          <b
            className="text-outline-orange inline-block animate-up-down"
            style={{ animationDelay: '0.1s' }}
          >
            H
          </b>
          <b
            className="text-outline-green inline-block animate-up-down"
            style={{ animationDelay: '0.2s' }}
          >
            e
          </b>
          <b
            className="text-outline-cyan inline-block animate-up-down"
            style={{ animationDelay: '0.3s' }}
          >
            y
          </b>
          <b
            className="text-outline-blue inline-block animate-up-down"
            style={{ animationDelay: '0.4s' }}
          >
            <i>!</i>
          </b>
          <b
            className="text-outline-purple inline-block animate-up-down"
            style={{ animationDelay: '0.5s' }}
          >
            <i>!</i>
          </b>
          &nbsp;
          <b
            className="text-outline-pink inline-block animate-up-down"
            style={{ animationDelay: '0.6s' }}
          >
            &gt;
          </b>
        </h1>
        <br />
        <p>The biggest dog around making websites and games! 😎🤙</p>
        <br />
        <a
          href="https://www.linkedin.com/in/cooldotty/"
          className="m-2 inline-block text-4xl text-inherit transition-transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/CoolDotty"
          className="m-2 inline-block text-4xl text-inherit transition-transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://cooldotty.itch.io/"
          className="m-2 inline-block text-4xl text-inherit transition-transform hover:scale-110"
        >
          <FaItchIo />
        </a>
      </main>
    </div>
  );
}

export default App;
