import flatMap from 'lodash/flatMap';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { NimaUIcon } from '@/app/layout.client';
import { docs } from '@/app/source';
import TextAnimation from '@/components/TextAnimation';

export default function HomePage() {
  const svg = `<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence
      type='fractalNoise'
      baseFrequency='0.65'
      numOctaves='3'
      stitchTiles='stitch'/>
  </filter>

  <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
</svg>`;

  const pages = docs.getPages();
  const titles: string[] = pages.map((page) => page.data.title);
  const pageTitles: Array<string | number> = flatMap<string, string | number>(titles, (value, index, array) => {
    const isNotLastItem = index < array.length - 1;
    return isNotLastItem ? [value, 2000] : value;
  }).flat();

  return (
    <main className="container max-sm:px-0 md:py-12">
      <div
        className="h-[300px] p-8 md:h-[400px] md:p-12"
        style={{
          backgroundImage: [
            'radial-gradient(circle at 70% 10%, rgba(238,235,208,0.5), transparent)',
            'radial-gradient(circle at 0% 80%, rgba(190,50,255,0.5), transparent)',
            'radial-gradient(circle at 50% 50%, rgba(100,50,255,0.3), transparent)',
            `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
          ].join(', '),
        }}
      >
        <h1 className="mb-4 border-b-4 border-fd-foreground pb-2 text-4xl md:text-5xl">
          <NimaUIcon className="inline text-lg size-40" fill="currentColor" />
          <ChevronRightIcon className="inline" />
          <TextAnimation data={pageTitles} />?
        </h1>
        <p className="text-sm md:text-base">bu ochiq kodli loyihadir, IT tushunchalarini o'zbek tilida o'rganing.</p>
      </div>
      <div className="grid grid-cols-1 border md:grid-cols-3 lg:grid-cols-4">
        {pages.map((page) => (
          <Link
            key={page.url}
            href={page.url}
            className="flex flex-col bg-fd-card p-4 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <p className="font-medium">{page.data.title}</p>
            <p className="text-sm text-fd-muted-foreground">{page.data.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
