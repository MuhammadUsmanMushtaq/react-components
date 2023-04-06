const EmptyStar = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fill='currentColor'
    viewBox='0 0 16 16'
  >
    <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z' />
  </svg>
);

const FullStar = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fill='currentColor'
    viewBox='0 0 16 16'
  >
    <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
  </svg>
);

const HalfStar = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fill='currentColor'
    viewBox='0 0 16 16'
  >
    <path d='M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z' />
  </svg>
);

const GoogleLogo = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='40'
    width='40'
    viewBox='0 0 24 24'
  >
    <path
      d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
      fill='#4285F4'
    />
    <path
      d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
      fill='#34A853'
    />
    <path
      d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
      fill='#FBBC05'
    />
    <path
      d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
      fill='#EA4335'
    />
    <path d='M1 1h22v22H1z' fill='none' />
  </svg>
);

const StarRating = ({ rating, totalRating, reviews }) => {
  const STAR_COUNT = 5;

  // const getRoundedRatingValue = (value) => Math.floor((value + 0.3) * 2) / 2;

  const ratingDecimal = rating % 1;
  const roundRating =
    rating % 1 !== 0 && ratingDecimal >= 0.7 ? Math.round(rating) : rating;

  const starArrayConstructor = (el, i) => {
    const j = i + 1;
    if (j <= roundRating) {
      return <FullStar key={i} />;
    } else if (j > roundRating && j < roundRating + 1) {
      return <HalfStar key={i} />;
    } else {
      return <EmptyStar key={i} />;
    }
  };
  const stars = Array.from({ length: STAR_COUNT }, starArrayConstructor);

  return (
    <div className='flex items-center gap-2 border-2 p-2'>
      <GoogleLogo />
      <div>
        <div className='flex gap-[2px] text-orange-500 mb-1'>{stars}</div>
        <div className='text-xs text-gray-500 cursor-pointer'>
          {reviews} reviews
        </div>
      </div>
      <div className='text-slate-600 text-lg font-bold'>{totalRating}</div>
    </div>
  );
};

export default StarRating;
