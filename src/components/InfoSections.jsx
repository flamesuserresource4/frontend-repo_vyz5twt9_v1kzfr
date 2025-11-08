import React from 'react';
import { Users, Award, Layers, Calendar, HelpCircle, Shield, Network, Gift, Zap } from 'lucide-react';

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative w-full scroll-mt-20 bg-[#0B1020] py-16 text-[#EDEDED] sm:py-20">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          {subtitle && (
            <p className="mt-2 max-w-3xl text-sm text-[#EDEDED]/80 sm:text-base">{subtitle}</p>
          )}
        </div>
      </div>
      {children}
    </div>
  </section>
);

export const WhatWhy = () => {
  const items = [
    {
      icon: Users,
      title: 'What is Hack 6.0?',
      desc: 'A 36-hour hackathon where students and innovators build futuristic tools, apps, and experiences.'
    },
    {
      icon: Shield,
      title: 'Who can participate?',
      desc: 'Open to students, recent grads, and builders of all backgrounds. Beginners welcome.'
    },
    {
      icon: Network,
      title: 'Why join?',
      desc: 'Learn from mentors, team up, ship fast, and showcase your project to judges and sponsors.'
    }
  ];

  return (
    <Section
      id="about"
      title="What is Hack — and why join?"
      subtitle="Build, collaborate, and launch something you are proud of."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
          >
            <Icon className="mb-4 h-6 w-6 text-[#00E5FF]" aria-hidden="true" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-[#EDEDED]/80">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export const PrizesTracks = () => {
  const prizes = [
    { place: '1st Prize', amount: '$4,000' },
    { place: '2nd Prize', amount: '$2,000' },
    { place: '3rd Prize', amount: '$1,000' },
    { place: 'Special', amount: 'Bounties & Swag' }
  ];

  const tracks = [
    { name: 'AI & Agents', desc: 'Autonomous systems, copilots, model tooling.' },
    { name: 'Web3 x Infra', desc: 'Protocols, wallets, zk, data availability.' },
    { name: 'XR & Games', desc: 'Web-based AR/VR, R3F scenes, multiplayer.' },
    { name: 'Climate & Health', desc: 'Sustainability, biotech, wellbeing.' }
  ];

  return (
    <Section id="prizes" title="Prize Pool & Tracks" subtitle="Win big while building something meaningful.">
      <div className="mb-8 rounded-2xl border border-[#6C5CE7]/40 bg-gradient-to-br from-[#1B0F3A]/60 to-[#0B1020]/60 p-6 text-center shadow-[0_0_30px_rgba(108,92,231,0.25)]">
        <div className="text-sm text-[#EDEDED]/70">Total Pool</div>
        <div className="text-4xl font-extrabold text-[#6C5CE7] sm:text-5xl">$7,000+</div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="mb-4 text-lg font-semibold">Prizes</h3>
          <ul className="space-y-3">
            {prizes.map((p) => (
              <li key={p.place} className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                <span className="font-medium">{p.place}</span>
                <span className="text-[#00E5FF]">{p.amount}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="mb-4 text-lg font-semibold">Tracks</h3>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {tracks.map((t) => (
              <li key={t.name} className="rounded-lg bg-white/5 p-4">
                <div className="font-medium">{t.name}</div>
                <div className="mt-1 text-sm text-[#EDEDED]/80">{t.desc}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export const PeopleTimelineFAQ = () => {
  const people = [
    { name: 'Ava Chen', role: 'Judge • AI Researcher', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop' },
    { name: 'Lucas Park', role: 'Mentor • Systems Engineer', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop' },
    { name: 'Maya Patel', role: 'Mentor • Product Designer', img: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=300&auto=format&fit=crop' }
  ];

  const faq = [
    { q: 'How big can teams be?', a: 'Teams of up to 4 are recommended, but solo builders are welcome.' },
    { q: 'Is the hackathon remote or in-person?', a: 'Hybrid. Build from anywhere, with a live finale and demos.' },
    { q: 'What if I am a beginner?', a: 'We provide starter kits, mentors, and workshops to help you ramp up quickly.' }
  ];

  const timeline = [
    { t: 'Registrations Open', d: 'Jan 10' },
    { t: 'Team Formation', d: 'Feb 2' },
    { t: 'Hack Weekend', d: 'Mar 1–3' },
    { t: 'Judging + Demos', d: 'Mar 4' }
  ];

  return (
    <Section id="people" title="Judges, Mentors, Timeline & FAQ">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Judges & Mentors</h3>
          {people.map((p) => (
            <div key={p.name} className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <img src={p.img} alt={p.name} className="h-12 w-12 rounded-lg object-cover" />
              <div>
                <div className="font-medium">{p.name}</div>
                <div className="text-sm text-[#EDEDED]/80">{p.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Timeline</h3>
          <div className="relative overflow-x-auto">
            <div className="flex min-w-max items-center gap-6 rounded-xl border border-white/10 bg-white/5 p-4">
              {timeline.map((m, idx) => (
                <div key={m.t} className="relative min-w-[10rem] rounded-lg bg-white/5 p-4 text-center">
                  <div className="text-xs uppercase tracking-wide text-[#00E5FF]">{m.d}</div>
                  <div className="mt-1 font-medium">{m.t}</div>
                  {idx < timeline.length - 1 && (
                    <div className="pointer-events-none absolute right-[-12px] top-1/2 h-0.5 w-6 -translate-y-1/2 bg-white/20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">FAQ</h3>
          <ul className="space-y-3">
            {faq.map((f) => (
              <li key={f.q} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <details>
                  <summary className="cursor-pointer list-none font-medium">{f.q}</summary>
                  <p className="mt-2 text-sm text-[#EDEDED]/80">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export const SponsorsFooter = () => {
  const sponsors = [
    'https://images.unsplash.com/photo-1606811971618-4482a0d2f3cc?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975922284-51babc3fe2f1?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=400&auto=format&fit=crop'
  ];

  return (
    <section className="w-full bg-[#0B1020] py-16 text-[#EDEDED]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 text-center text-sm uppercase tracking-widest text-[#EDEDED]/70">Sponsors</div>
        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
          {sponsors.map((src, i) => (
            <img key={i} src={src} alt="Sponsor logo" className="mx-auto h-12 w-auto opacity-80 transition hover:scale-105 hover:opacity-100" />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-[#EDEDED]/80">
          <div>© {new Date().getFullYear()} Hack 6.0 — Code Beyond the Cosmos</div>
          <div className="mt-2">Contact: hello@hack6.dev • Follow us on X, GitHub, LinkedIn</div>
        </div>
      </div>
    </section>
  );
};

export default Section;
