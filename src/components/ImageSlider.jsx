import React, { useState, useEffect } from 'react';
import { CiCircleChevRight, CiCircleChevLeft } from 'react-icons/ci';

const ImageSlider = ({ url, page = 1, limit = 4 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== '') fetchImages(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  if (loading) <div>Loading</div>;

  if (errorMsg !== null) <div>Error occured {errorMsg}</div>;
  return (
    <div className='flex justify-center items-center relative w-[300px]'>
      <CiCircleChevRight
        onClick={handleNext}
        size={36}
        className='absolute text-white right-4'
      />
      {images.map((img, index) => (
        <img
          className={
            currentSlide === index
              ? 'rounded-md shadow-md'
              : 'rounded-md shadow-md hidden'
          }
          src={img.download_url}
          key={img.id}
          alt={img.download_url}
        />
      ))}
      <CiCircleChevLeft
        onClick={handlePrevious}
        size={36}
        className='absolute text-white left-4'
      />
      <span className='flex absolute bottom-4 gap-2'>
        {images && images.length
          ? images.map((_, index) => (
              <button
                onClick={() => setCurrentSlide(index)}
                key={index}
                className={
                  currentSlide === index
                    ? 'w-2 h-2 rounded-full bg-white cursor-pointer'
                    : 'w-2 h-2 rounded-full cursor-pointer inactive bg-gray-400'
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
