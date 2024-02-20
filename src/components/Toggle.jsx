import { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const [bgColor, setBgColor] = useState('bg-red-500');

  const toggleHandler = () => {
    setIsOn((prev) => !prev);
    setBgColor((prevColor) => !prevColor);
  };
  return (
    <div className='flex justify-center items-center flex-col gap-4'>
      <div
        className={`relative border-2 rounded-full  w-32 h-12 ${
          bgColor ? 'bg-red-500' : 'bg-green-500'
        }`}
      >
        <button
          onClick={toggleHandler}
          className={
            isOn
              ? 'transition  delay-100 duration-500  absolute bottom-[6px] translate-x-14  px-4 py-1 w-[60px] text-center font-semibold rounded-full bg-gray-100 shadow-md '
              : 'transition  delay-100 duration-500  absolute bottom-[6px] translate-x-2   px-4 py-1 w-[60px] text-center font-semibold rounded-full bg-gray-100 shadow-md'
          }
        >
          {isOn ? 'ON' : 'OFF'}
        </button>
      </div>
      <p>Simple Toggle button with tailwind</p>
    </div>
  );
}

export default Toggle;
