import '@/app/global.css';
// eslint-disable-next-line import-x/no-unresolved
import { GeistMono } from 'geist/font/mono';
// eslint-disable-next-line import-x/no-unresolved
import { GeistSans } from 'geist/font/sans';
import type { Viewport } from 'next';

import { Body } from '@/app/layout.client';
import { baseUrl, createMetadata } from '@/utils/metadata';

import { Provider } from './provider';

export const metadata = createMetadata({
  title: {
    template: '%s | NimaU',
    default: 'NimaU',
  },
  description: "bu ochiq kodli loyihadir, IT tushunchalarini o'zbek tilida o'rganing.",
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <html lang="uz" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <Body>
        <Provider>{children}</Provider>
      </Body>
    </html>
  );
}
