const Layout = ({ children }) => {
  return (
    <>
      <div className='text-3xl font-bold text-center p-8 mb-4'>
        React Components
      </div>
      <main
        className='
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
