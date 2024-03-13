import { useState } from 'react';
import { MdSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';

function ToggleBtn() {
  const [isOn, setIsOn] = useState(false);
  const [bgColor, setBgColor] = useState('bg-gray-200');

  const toggleHandler = () => {
    setIsOn((prev) => !prev);
    setBgColor((prevColor) => !prevColor);
  };
  return (
    <div className='mt-4 flex justify-center items-center flex-col gap-4'>
      <div
        onClick={toggleHandler}
        className={`p-4 relative border-2 rounded-full  w-14 h-7 ${
          bgColor ? 'bg-gray-200' : 'bg-slate-500'
        }`}
      >
        <button
          className={
            isOn
              ? 'transition  delay-100 duration-300 absolute bottom-1 translate-x-2 rounded-full bg-gray-100 shadow-md '
              : 'transition  delay-100 duration-300 absolute bottom-1 translate-x-[-12px] rounded-full bg-gray-100 shadow-md'
          }
        >
          {isOn ? (
            <MdSunny size={24} color='orange' className='p-1' />
          ) : (
            <FaMoon size={24} color='orange' className='p-1' />
          )}
        </button>
      </div>
      <p>Custom Toggle button </p>
    </div>
  );
}

export default ToggleBtn;
