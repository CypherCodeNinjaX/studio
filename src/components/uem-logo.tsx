import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

const uemLogoUrl = 'https://drive.google.com/uc?export=download&id=1Hb7i7hDLxgpIyAaBBjW1Ir7lgUlS4ftx';

export function UEMLogo(props: React.ComponentProps<typeof Image>) {
  const { className, ...rest } = props;
  
  return (
    <div className={cn('relative', className)} style={{ width: props.width, height: props.height }}>
       <Image
        src={uemLogoUrl}
        alt="UEM Logo"
        {...rest}
      />
    </div>
  );
}
