import Image from 'next/image';
import React from 'react';

// This is a placeholder as direct Google Drive links are not ideal for production.
// It's recommended to host the logo on a proper CDN or within the project's public directory.
const iemLogoUrl = 'https://drive.google.com/uc?export=download&id=1IYy6ly8vBTu3yapNHOOYQTGNfs3LgRvo';

export function IEMLogo(props: React.ComponentProps<'img'>) {
  // The 'as' prop isn't standard for img, so we extract className and other props
  const { className, ...rest } = props;
  
  return (
    <div className={cn('relative', className)} style={{ width: props.width, height: props.height }}>
       <Image
        src={iemLogoUrl}
        alt="IEM Logo"
        layout="fill"
        objectFit="contain"
        {...rest}
      />
    </div>
  );
}

// Helper function to combine class names
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
