'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { type ReactNode } from 'react';

import { cn } from '@/utils/cn';
import { modes } from '@/utils/modes';

const itemVariants = cva('rounded-md px-2 py-1 transition-colors hover:text-fd-accent-foreground', {
  variants: {
    active: {
      true: 'bg-fd-accent text-fd-accent-foreground',
    },
  },
});

export function Body({ children }: { children: ReactNode }): React.ReactElement {
  const mode = useMode();

  return <body className={cn(mode, 'flex min-h-screen flex-col')}>{children}</body>;
}

export function NavChildren(): React.ReactElement {
  const mode = useMode();

  return (
    <div className="rounded-md border bg-fd-muted/80 p-1 text-sm text-fd-muted-foreground max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
      {modes.map((m) => (
        <Link key={m.param} href={`/docs/${m.param}`} className={cn(itemVariants({ active: mode === m.param }))}>
          {m.name}
        </Link>
      ))}
    </div>
  );
}

export function useMode(): string | undefined {
  const { slug } = useParams();
  return Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined;
}

export function NimaUIcon(props: React.SVGProps<SVGSVGElement>): React.ReactElement {
  return (
    <svg viewBox="0 0 550 470" {...props}>
      <g>
        <g data-paper-data='{"isGlobalGroup":true,"bounds":{"x":74.79241942145228,"y":183.556294910979,"width":400.41516115709544,"height":102.88741017804196}}'>
          <g data-paper-data='{"isPrimaryText":true}' id="element-id-44060">
            <path
              d="M126.96354,285.2063v-44.531c0,-5.04491 -1.84333,-9.41069 -5.52999,-13.09735c-3.68666,-3.68666 -8.05245,-5.52999 -13.09735,-5.52999c-5.04491,0 -9.41069,1.84333 -13.09735,5.52999c-3.68666,3.68666 -5.52999,8.05245 -5.52999,13.09735v44.531h-14.91643v-44.531c0,-8.87709 3.37136,-16.687 10.11407,-23.42971c6.74271,-6.74271 14.55261,-10.11407 23.42971,-10.11407c8.82859,0 16.61423,3.37136 23.35694,10.11407c6.79122,6.79122 10.18683,14.60112 10.18683,23.42971v44.531z"
              data-paper-data='{"glyphName":"n","glyphIndex":0,"firstGlyphOfWord":true,"word":1}'
              fill-rule="nonzero"
              id="element-id-91779"
            ></path>
            <path
              d="M161.08942,198.39996v-14.84367h14.84367v14.84367zM161.08942,285.2063v-76.8378h14.84367v76.8378z"
              data-paper-data='{"glyphName":"i","glyphIndex":1,"word":1}'
              fill-rule="nonzero"
              id="element-id-73170"
            ></path>
            <path
              d="M284.64111,285.2063v-47.00494c0,-4.22026 -1.43101,-7.97968 -4.29302,-11.27828c-2.81351,-3.25008 -6.35464,-4.87513 -10.62341,-4.87513c-4.60833,0 -8.27074,1.50377 -10.98722,4.51131c-2.61947,3.00754 -3.92921,6.88824 -3.92921,11.64209v47.00494h-14.91643v-47.00494c0,-4.80236 -1.33399,-8.68306 -4.00197,-11.64209c-2.61947,-3.00754 -6.23337,-4.51131 -10.8417,-4.51131c-4.31728,0 -7.88267,1.62504 -10.69617,4.87513c-2.81351,3.25008 -4.22026,7.00951 -4.22026,11.27828v47.00494h-14.91643v-47.00494c0,-8.39201 2.86201,-15.66831 8.58604,-21.82892c5.72403,-6.16061 12.8063,-9.24091 21.24682,-9.24091c9.07113,0 16.51722,3.29859 22.33826,9.89578c5.72403,-6.59718 13.17012,-9.89578 22.33826,-9.89578c8.39201,0 15.45002,3.0803 21.17405,9.24091c5.77254,6.20912 8.65881,13.48542 8.65881,21.82892v47.00494z"
              data-paper-data='{"glyphName":"m","glyphIndex":2,"word":1}'
              fill-rule="nonzero"
              id="element-id-19574"
            ></path>
            <path
              d="M475.20758,253.04502c0,8.87709 -3.39561,16.66274 -10.18683,23.35694c-6.79122,6.6942 -14.57687,10.0413 -23.35694,10.0413c-8.87709,0 -16.687,-3.3471 -23.42971,-10.0413c-6.74271,-6.6942 -10.11407,-14.47985 -10.11407,-23.35694v-44.67652h14.91643v44.67652c0,5.04491 1.84333,9.41069 5.52999,13.09735c3.68666,3.68666 8.05245,5.52999 13.09735,5.52999c5.04491,0 9.41069,-1.84333 13.09735,-5.52999c3.68666,-3.68666 5.52999,-8.05245 5.52999,-13.09735v-44.67652h14.91643z"
              data-paper-data='{"glyphName":"u","glyphIndex":4,"lastGlyphOfWord":true,"word":1}'
              fill-rule="nonzero"
              id="element-id-63290"
            ></path>
            <g
              data-paper-data='{"fillRule":"evenodd","fillRuleOriginal":"evenodd","isIcon":true,"iconStyle":"icon-in-text","selectedEffects":{"container":"","transformation":"","pattern":""},"bounds":{"x":312.5089426654322,"y":207.13182632177168,"width":79.53087843249574,"height":79.31187876724928},"iconType":"icon","rawIconId":"118682","combineTerms":"question","suitableAsStandaloneIcon":true}'
              fill-rule="evenodd"
              id="element-id-75902"
            >
              <path
                d="M352.68388,286.41071c-0.557,0.022 -1.118,0.033 -1.683,0.033c-10.67198,0 -19.76697,-3.90499 -27.28596,-11.71498c-7.47066,-7.76132 -11.20598,-17.05097 -11.20598,-27.86896c0,-10.91398 3.88099,-20.25197 11.64298,-28.01296c7.80899,-7.80999 17.17197,-11.71498 28.08596,-11.71498c10.91498,0 20.27697,3.90499 28.08696,11.71498c7.80999,7.80899 11.71498,17.14697 11.71498,28.01296v38.34694zM327.40453,271.33115c6.52984,6.68532 15.31404,10.33892 24.64239,10.41666h0.23321c19.20085,0 34.82583,-15.62498 34.9813,-34.7481c0.15547,-19.27859 -15.46951,-35.05904 -34.9813,-35.21451c-19.20085,0 -34.82583,15.62498 -34.9813,34.7481c-0.07774,9.32835 3.49813,18.19028 10.10571,24.79786zM359.35412,249.33179c-2.40983,1.9434 -4.81965,3.96455 -4.81965,6.29663c0,1.24378 -1.01057,2.25435 -2.25435,2.25435c-1.24378,0 -2.25435,-1.01057 -2.25435,-2.25435c0,-4.43096 3.57587,-7.38494 6.52984,-9.79476c0.8551,-0.69963 1.63246,-1.39925 2.25435,-2.02114c2.17661,-2.25435 3.73134,-5.90795 1.39925,-9.56156c-1.47699,-2.33209 -4.43096,-3.73134 -7.9291,-3.73134c-5.05285,0 -9.17288,4.12002 -9.17288,9.17288c0,1.24378 -1.01057,2.25435 -2.25435,2.25435c-1.24378,0 -2.25435,-1.01057 -2.25435,-2.25435c0,-7.54041 6.14116,-13.68158 13.68158,-13.68158c5.05285,0 9.48382,2.17661 11.73817,5.83022c3.10945,4.81964 2.33209,10.80534 -2.02114,15.15856c-0.77736,0.77736 -1.63246,1.47699 -2.64303,2.33209zM348.85973,265.26772v-0.15547c0,-1.9434 1.63246,-3.57587 3.57587,-3.57587c1.9434,0 3.57587,1.63246 3.57587,3.57587v0.15547c0,1.9434 -1.63246,3.57587 -3.57587,3.57587c-1.9434,0 -3.57587,-1.63246 -3.57587,-3.57587z"
                data-paper-data='{"isPathIcon":true}'
                id="element-id-58723"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <rect
        data-element-id="element-id-44060"
        stroke-width="2"
        fill="transparent"
        className="invisible-element-box grouping-element"
        x="75"
        y="184"
        width="400"
        height="103"
        data-element-name="isPrimaryText"
      ></rect>
      <rect
        data-element-id="element-id-19574"
        stroke-width="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="195"
        y="207"
        width="104"
        height="78"
      ></rect>
      <rect
        data-element-id="element-id-75902"
        stroke-width="2"
        fill="transparent"
        className="invisible-element-box grouping-element"
        x="313"
        y="207"
        width="80"
        height="79"
        data-element-name="isIcon"
      ></rect>
      <rect
        data-element-id="element-id-58723"
        stroke-width="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="313"
        y="207"
        width="80"
        height="79"
      ></rect>
      <rect
        data-element-id="element-id-91779"
        stroke-width="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="75"
        y="207"
        width="67"
        height="78"
      ></rect>
      <rect
        data-element-id="element-id-63290"
        stroke-width="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="408"
        y="208"
        width="67"
        height="78"
      ></rect>
      <rect
        data-element-id="element-id-73170"
        stroke-width="2"
        fill="transparent"
        className="invisible-element-box individual-element"
        x="161"
        y="184"
        width="15"
        height="102"
      ></rect>
    </svg>
  );
}