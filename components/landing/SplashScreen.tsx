'use client';

import { useEffect, useState } from 'react';
import { Play, X } from 'lucide-react';

const SPLASH_KEY = 'heritage-splash-seen';

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SPLASH_KEY) === '1') return;
    } catch {
      /* ignore */
    }
    setVisible(true);
  }, []);

  const dismiss = () => {
    try {
      sessionStorage.setItem(SPLASH_KEY, '1');
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      role="dialog"
      aria-modal="true"
      aria-labelledby="splash-title"
    >
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          title="Heritage home film"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 scale-125 border-0"
          src="https://www.youtube-nocookie.com/embed/jSlrNR2hAqc?autoplay=1&mute=1&controls=0&loop=1&playlist=jSlrNR2hAqc&modestbranding=1&rel=0&playsinline=1"
          allow="autoplay; encrypted-media"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 max-w-2xl px-6 text-center text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          A cinematic introduction
        </p>
        <h1 id="splash-title" className="mb-4 font-serif text-4xl font-bold md:text-6xl">
          Homes meant to last generations
        </h1>
        <p className="mb-10 text-lg text-white/80">
          Walk through courtyards, jharokhas, and tiled roofs before you begin designing yours.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3 text-lg font-semibold shadow-xl hover:scale-105"
          >
            <Play className="h-5 w-5 fill-white" />
            Enter the studio
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-white/80 hover:bg-white/10"
          >
            <X className="h-4 w-4" />
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
