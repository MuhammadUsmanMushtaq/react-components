const Layout = ({ children }) => {
  return (
    <>
      <div className='text-3xl text-white text-center bg-blue-500 p-8 mb-4'>
        React Components
      </div>
      <main
        className='
       m-auto
        flex
        justify-center
        flex-wrap
        sm:gap-4
        items-center
        p-4
        '
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
