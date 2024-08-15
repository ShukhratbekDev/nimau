import { loader } from 'fumadocs-core/source';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';
import { createMDXSource, defaultSchemas } from 'fumadocs-mdx';
import { icons } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import { z } from 'zod';

import { map } from '@/.map';
import { JSLogo } from '@/components/icons/js-logo';
import { create } from '@/components/ui/icon';

type SVGComponentProps = SVGProps<SVGSVGElement>;

type IconMap = {
  [key: string]: ForwardRefExoticComponent<SVGComponentProps & RefAttributes<SVGSVGElement>>;
};

export const docs = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  icon(iconName) {
    const customIconMap: IconMap = {
      JSLogo: JSLogo, // Mapping custom icons
      // Add other custom icons here
    };

    if (iconName && iconName in customIconMap) {
      // If the icon is found in the customIconMap, use it
      return create({ icon: customIconMap[iconName] });
    } else if (iconName && iconName in icons) {
      // If the icon is found in the default Lucide icons, use it
      return create({ icon: icons[iconName as keyof typeof icons] });
    }
  },
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        preview: z.string().optional(),
        index: z.boolean().default(false),
        authors: z.array(
          z.object({ name: z.string(), avatar: z.string().optional(), telegram: z.string().optional() })
        ),
        createdAt: z.string().date().or(z.date()).optional(),
        updatedAt: z.string().date().or(z.date()).optional(),
      }),
    },
  }),
});

export const blog = loader({
  baseUrl: '/blog',
  rootDir: 'blog',
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        author: z.string(),
        date: z.string().date().or(z.date()).optional(),
      }),
    },
  }),
});

export type Page = InferPageType<typeof docs>;
export type Meta = InferMetaType<typeof docs>;
