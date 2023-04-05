import { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const toggleHandler = () => {
    setIsOn(!isOn);
  };
  return (
    <button
      onClick={toggleHandler}
      className={
        isOn
          ? 'px-4 py-1 w-[60px] text-center text-white rounded-full bg-green-600'
          : 'px-4 py-1 w-[60px] text-center text-white rounded-full bg-red-600'
      }
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default Toggle;
