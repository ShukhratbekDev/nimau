import { LibraryIcon, type LucideIcon } from 'lucide-react';

import { JSLogo } from '@/app/icons';

export interface Mode {
  param: string;
  url: string;
  name: string;
  description: string;
  icon: LucideIcon | React.ElementType<React.SVGProps<SVGSVGElement>>;
}

export const modes: Mode[] = [
  {
    param: 'core',
    url: '/core',
    name: 'Asosiy',
    description: '',
    icon: LibraryIcon,
  },
  {
    param: 'js',
    url: '/js',
    name: 'Javascript',
    description: '',
    icon: JSLogo,
  },
];
