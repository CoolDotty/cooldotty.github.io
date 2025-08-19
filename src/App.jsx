import React from 'react';

import { FaLinkedin, FaGithub, FaItchIo } from 'react-icons/fa';

function App() {
  return (
    <div className="grid place-items-center min-h-screen max-w-[45em] mx-auto my-2">
      <main className="relative text-white rounded-lg bg-black/75 mx-2 mb-40 p-3 pb-32 max-[550px]:pb-20 max-w-full overflow-hidden border-2 border-black text-3xl text-center font-simply-best text-shadow-lg tv-static">
        <h1 className="inline-block mb-4 pt-20 max-[550px]:pt-10 font-mini-pizza text-8xl max-[550px]:text-5xl">
          <b className="inline-block animate-up-down text-outline-red" style={{animationDelay: '0s'}}>&lt;</b>
          &nbsp;
          <b className="inline-block animate-up-down text-outline-orange" style={{animationDelay: '0.1s'}}>H</b>
          <b className="inline-block animate-up-down text-outline-green" style={{animationDelay: '0.2s'}}>e</b>
          <b className="inline-block animate-up-down text-outline-cyan" style={{animationDelay: '0.3s'}}>y</b>
          <b className="inline-block animate-up-down text-outline-blue" style={{animationDelay: '0.4s'}}>
            <i>!</i>
          </b>
          <b className="inline-block animate-up-down text-outline-purple" style={{animationDelay: '0.5s'}}>
            <i>!</i>
          </b>
          &nbsp;
          <b className="inline-block animate-up-down text-outline-pink" style={{animationDelay: '0.6s'}}>&gt;</b>
        </h1>
        <br />
        <p>The biggest dog around making websites and games! 😎🤙</p>
        <br />
        <a href="https://www.linkedin.com/in/cooldotty/" className="inline-block text-inherit m-2 text-4xl hover:scale-110 transition-transform">
          <FaLinkedin />
        </a>
        <a href="https://github.com/CoolDotty" className="inline-block text-inherit m-2 text-4xl hover:scale-110 transition-transform">
          <FaGithub />
        </a>
        <a href="https://cooldotty.itch.io/" className="inline-block text-inherit m-2 text-4xl hover:scale-110 transition-transform">
          <FaItchIo />
        </a>
      </main>
    </div>
  );
}

export default App;
