const Card = ({ children }) => (
  <div className='flex justify-center items-center flex-wrap w-[460px] h-[300px] drop-shadow bg-gray-50 hover:drop-shadow-md rounded p-4 mb-4'>
    {children}
  </div>
);

export default Card;
