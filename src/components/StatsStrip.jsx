import React, { useEffect, useRef } from 'react';

const Stat = ({ label, value }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-center">
    <div className="text-3xl font-extrabold text-[#00E5FF]">{value}</div>
    <div className="text-sm text-[#EDEDED]/80">{label}</div>
  </div>
);

const StatsStrip = () => {
  return (
    <section className="w-full bg-[#0B1020] py-12 text-[#EDEDED]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 sm:grid-cols-4">
        <Stat label="Hours" value="36" />
        <Stat label="Tracks" value="4" />
        <Stat label="Prizes" value="$7k+" />
        <Stat label="Participants" value="500+" />
      </div>
    </section>
  );
};

export default StatsStrip;
