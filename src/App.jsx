import React from 'react';
import Hero3D from './components/Hero3D';
import StatsStrip from './components/StatsStrip';
import { WhatWhy, PrizesTracks } from './components/InfoSections';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0B1020] text-[#EDEDED]">
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0B1020]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="text-sm font-semibold tracking-wide text-[#EDEDED]">
            Hack 6.0
          </a>
          <nav className="hidden gap-6 text-sm text-[#EDEDED]/80 sm:flex">
            <a href="#about" className="hover:text-white">What</a>
            <a href="#prizes" className="hover:text-white">Prizes</a>
            <a href="#people" className="hover:text-white">People</a>
            <a href="#register" className="hover:text-white">Register</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero3D />
        <StatsStrip />
        <WhatWhy />
        <PrizesTracks />
      </main>
    </div>
  );
}

export default App;
