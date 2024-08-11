'use client';

import { TypeAnimation } from 'react-type-animation';

export default function TextAnimation({ data }: { data: Array<string | number> }) {
  return (
    <TypeAnimation
      sequence={data}
      wrapper="span"
      speed={50}
      repeat={Number.POSITIVE_INFINITY}
      style={{
        marginLeft: 10,
      }}
    />
  );
}
