import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { type DocsLayoutProps } from 'fumadocs-ui/layout';

import { BookIcon } from 'lucide-react';

import { NimaUIcon, NavChildren } from '@/app/layout.client';

import { docs } from '@/app/source';
import { modes } from '@/utils/modes';

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: <NimaUIcon className="max-h-32 min-h-16" fill="currentColor" />,
    transparentMode: 'top',
    children: <NavChildren />,
  },
  githubUrl: 'https://github.com/ShukhratbekDev/nimau',
  links: [
    {
      icon: <BookIcon />,
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: docs.pageTree,
  sidebar: {
    banner: (
      <RootToggle
        options={modes.map((mode) => ({
          url: `/docs/${mode.param}`,
          icon: (
            <mode.icon
              className="size-9 shrink-0 rounded-md bg-gradient-to-t from-fd-background/80 p-1.5"
              style={{
                backgroundColor: `hsl(var(--${mode.param}-color)/.3)`,
                color: `hsl(var(--${mode.param}-color))`,
              }}
            />
          ),
          title: mode.name,
          description: mode.description,
        }))}
      />
    ),
  },
};
