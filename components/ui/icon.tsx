import type { LucideIcon } from 'lucide-react';
import { TerminalIcon } from 'lucide-react';

type BaseIcon = LucideIcon | React.ElementType<React.SVGProps<SVGSVGElement>>;

export function create({ icon: Icon }: { icon?: BaseIcon }): React.ReactElement {
  return (
    <div className="rounded-md border bg-gradient-to-b from-fd-secondary p-1 shadow-sm">
      {Icon ? <Icon /> : <TerminalIcon />}
    </div>
  );
}
