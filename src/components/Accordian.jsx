import React, { useState } from 'react';

const data = [
  { id: 1, question: 'Question One click to open/close', answer: 'Answer ...' },
  { id: 2, question: 'Question Two click to open/close', answer: 'Answer ...' },
  {
    id: 3,
    question: 'Question Three click to open/close',
    answer: 'Answer ...',
  },
];
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [openAll, setOpenAll] = useState(false);

  const handleSelect = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleClick = () => {
    setOpenAll(!openAll);
  };
  if (data && data.length < 0) return <div>No data</div>;

  return (
    <div>
      <button
        onClick={handleClick}
        className='border-2 p-2 rounded-md bg-blue-400 text-white mb-2'
      >
        {openAll ? 'Close All' : 'Collepse All'}
      </button>
      {data.map((dataItems) => (
        <div className='mb-2 flex flex-col gap-2 rounded-lg bg-black p-5 text-white'>
          <div onClick={() => handleSelect(dataItems.id)} className=' '>
            <div className='w-[400px] flex justify-between'>
              {dataItems.question}
              <div>+</div>
            </div>

            {selected === dataItems.id ? <div>{dataItems.answer}</div> : null}
            {openAll ? <div>{dataItems.answer}</div> : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
