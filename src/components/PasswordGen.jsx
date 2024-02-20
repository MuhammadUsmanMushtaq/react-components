import { useState, useCallback, useEffect, useRef } from 'react';

const PasswordGen = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!#%&/()${}[]_-=';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 6); //select range to select a part of text
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='text-center text-2xl w-full max-w-md mx-auto rounded-lg p-4 text-white bg-gray-700 shadow-md'>
        Password Generator
        <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-4'>
          <input
            className='text-lg text-black outline-none w-full py-1 px-3'
            type='text'
            value={password}
            placeholder='passowrd'
            readOnly
            ref={passwordRef}
          />
          <button
            className='text-lg outline-none bg-blue-700 hover:bg-blue-500 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input
              type='range'
              min={8}
              max={18}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type='checkbox'
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              id='numberInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGen;
