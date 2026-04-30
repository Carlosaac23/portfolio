'use client';

import Image from 'next/image';

export default function NavBar() {
  return (
    <header className='mb-10'>
      <div className='flex items-center justify-between'>
        <Image
          alt='Github Profile photo'
          className='rounded-full'
          height={36}
          priority
          src='https://github.com/Carlosaac23.png'
          width={36}
        />
      </div>
    </header>
  );
}
