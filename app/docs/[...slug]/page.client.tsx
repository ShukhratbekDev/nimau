'use client';
import { TooltipContent, Tooltip, TooltipTrigger } from '@radix-ui/react-tooltip';
import { Share } from 'lucide-react';
import { useState } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/utils/cn';

export function Control({ url }: { url: string }): React.ReactElement {
  const [open, setOpen] = useState(false);
  const onClick = (): void => {
    setOpen(true);
    void navigator.clipboard.writeText(`${window.location.origin}${url}`);
  };

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger className={cn(buttonVariants({ className: 'gap-2', variant: 'secondary' }))} onClick={onClick}>
        <Share className="size-4" />
      </TooltipTrigger>
      <TooltipContent className="rounded-lg border bg-fd-popover p-2 text-sm text-fd-popover-foreground">
        Havola(Link)dan nusxa olish
      </TooltipContent>
    </Tooltip>
  );
}
