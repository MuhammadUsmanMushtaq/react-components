import { useState } from 'react';

const BgChanger = () => {
  const [color, setColor] = useState('');

  return (
    <div>
      <div
        className={`${color} w-[100px] h-[100px] border-2 rounded-xl flex justify-center m-auto`}
      ></div>
      <div className='border-2 rounded-xl mt-2 flex justify-center gap-2 p-2 '>
        <button
          className='w-[100px] text-white bg-green-600 border-2  py-2 px-4 rounded-full'
          onClick={() => {
            setColor('bg-green-600');
          }}
        >
          Green
        </button>
        <button
          className='w-[100px] text-white bg-black border-2 py-2 px-4 rounded-full'
          onClick={() => {
            setColor('bg-black');
          }}
        >
          Black
        </button>
        <button
          className='w-[100px] text-white bg-red-600 border-2 py-2 px-4 rounded-full'
          onClick={() => {
            setColor('bg-red-600');
          }}
        >
          Red
        </button>
      </div>
    </div>
  );
};

export default BgChanger;
