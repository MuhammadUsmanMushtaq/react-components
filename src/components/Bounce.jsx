import React from 'react';

const Bounce = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-4'>
      <div className='flex justify-center gap-4'>
        <svg
          className='animate-bounce w-8 h-8 text-green-400 '
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            strokeWidth='1'
            d='M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4'
          />
        </svg>
        <svg
          className=' animate-spin w-8 h-8 text-blue-400'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            d='M17.7 7.7A7.1 7.1 0 0 0 5 10.8M18 4v4h-4m-7.7 8.3A7.1 7.1 0 0 0 19 13.2M6 20v-4h4'
          />
        </svg>
        <svg
          className='animate-pulse w-8 h-8 text-red-500'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z' />
        </svg>
      </div>
      <p>Simple animation with tailwind</p>
    </div>
  );
};

export default Bounce;
