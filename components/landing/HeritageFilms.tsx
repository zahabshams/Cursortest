'use client';

import { Play } from 'lucide-react';

const films = [
  {
    id: 'jSlrNR2hAqc',
    title: 'Hawa Mahal, Jaipur',
    place: 'Rajasthan · Palace of the Winds',
  },
  {
    id: 'w05eaUmZphw',
    title: 'Tropical Kerala Home',
    place: 'Kerala · Courtyard residence',
  },
  {
    id: 'IqLnpyoZZnI',
    title: 'Heritage House Walkthrough',
    place: 'Ujjain · Traditional courtyard home',
  },
];

export default function HeritageFilms() {
  return (
    <section className="bg-gray-950 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            On film
          </p>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Heritage homes in motion</h2>
          <p className="text-lg text-gray-300">
            Watch courtyards, carved facades, and tiled roofs — the language of Indian houses we design from.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {films.map((film) => (
            <article key={film.id} className="overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
              <div className="relative aspect-video bg-black">
                <iframe
                  title={film.title}
                  src={`https://www.youtube-nocookie.com/embed/${film.id}?rel=0&modestbranding=1`}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <div className="mb-1 flex items-center gap-2 text-amber-400">
                  <Play className="h-4 w-4 fill-amber-400" />
                  <span className="text-xs font-semibold uppercase tracking-wide">Film</span>
                </div>
                <h3 className="text-xl font-bold">{film.title}</h3>
                <p className="text-sm text-gray-400">{film.place}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
