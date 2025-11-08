import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, ExternalLink } from 'lucide-react';

const Hero3D = () => {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#0B1020] text-[#EDEDED]"
      aria-label="Hero section with interactive 3D scene"
    >
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient/Glow overlays (non-interactive) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(108,92,231,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0B1020] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <Star className="h-4 w-4 text-[#00E5FF]" aria-hidden="true" />
          <span className="text-xs tracking-wide text-[#EDEDED]/80">Dark theme • Interactive 3D • Accessible</span>
        </div>

        <h1 className="text-balance bg-gradient-to-br from-[#EDEDED] via-[#EDEDED] to-[#6C5CE7] bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Hack 6.0 — Code Beyond the Cosmos
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-sm text-[#EDEDED]/80 sm:text-base md:text-lg">
          Build futuristic apps, tools, and experiments that push code to new frontiers.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#register"
            className="group inline-flex items-center gap-2 rounded-lg border border-[#6C5CE7]/40 bg-white/10 px-6 py-3 text-sm font-semibold text-[#EDEDED] shadow-[0_0_20px_rgba(108,92,231,0.35)] backdrop-blur-md transition hover:shadow-[0_0_30px_rgba(0,229,255,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
            aria-label="Register Now"
          >
            <Rocket className="h-4 w-4 text-[#00E5FF] transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
            Register Now
          </a>
          <a
            href="#theme"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-[#EDEDED] transition hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7]"
            aria-label="View Theme"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            View Theme
          </a>
          <a
            href="#rules"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-[#EDEDED] transition hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7]"
            aria-label="Rules"
          >
            Rules
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
