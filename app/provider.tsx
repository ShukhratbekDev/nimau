'use client';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { I18nProvider } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }): React.ReactElement {
  return (
    <I18nProvider
      locale="uz"
      translations={
        {
          uz: {
            search: 'Izlash',
            previousPage: 'Oldingi',
            nextPage: 'Keyingi',
            searchNoResult: 'Hech narsa topilmadi',
            toc: 'Ushbu sahifada',
            lastUpdate: 'Oxirgi yangilangan sana',
            tocNoHeadings: "Sarlavhalar yo'q",
          },
        }.uz
      }
    >
      <RootProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </RootProvider>
    </I18nProvider>
  );
}
