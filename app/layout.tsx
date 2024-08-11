import '@/app/global.css';
import { I18nProvider } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="uz" className={inter.className} suppressHydrationWarning>
      <body>
        <I18nProvider
          locale="uz"
          translations={
            {
              uz: {
                search: 'qidirish',
              },
            }.uz
          }
        >
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
