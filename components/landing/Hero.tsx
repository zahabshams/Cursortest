'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          title="Heritage architecture film"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[180%] min-h-[180%] w-[180%] min-w-[180%] -translate-x-1/2 -translate-y-1/2 border-0"
          src="https://www.youtube-nocookie.com/embed/jSlrNR2hAqc?autoplay=1&mute=1&controls=0&loop=1&playlist=jSlrNR2hAqc&modestbranding=1&rel=0&playsinline=1"
          allow="autoplay; encrypted-media"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl text-center text-white">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-amber-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-amber-200 ring-1 ring-amber-400/40">
              Heritage Architecture Redefined
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Craft Your
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              {' '}
              Legacy
            </span>
            <br />
            One Stone at a Time
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
            Experience the timeless elegance of traditional Indian architecture blended with modern luxury.
            Design a home that tells your story and echoes through generations.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/wizard"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/ai-consultation"
              className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-amber-400 hover:bg-white/20"
            >
              Talk to AI Consultant
            </Link>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: '500+', label: 'Heritage Homes' },
              { number: '50+', label: 'Architectural Styles' },
              { number: '25+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-3xl font-bold text-amber-300 md:text-4xl">{stat.number}</div>
                <div className="text-sm uppercase tracking-wide text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
