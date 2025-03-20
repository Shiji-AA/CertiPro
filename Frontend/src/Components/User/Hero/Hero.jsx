import { useEffect, useRef } from 'react';
import modi from '../../../assets/modi.jpg';
import gandhi from '../../../assets/gandhi.jpg';
import indira from '../../../assets/indira.avif'

const slides = [
  {
    id: 1,
    title: "An autonomous\nbody,\nRegd Under\nGovernment\nof India",
    image: modi,
    alt: "Official representative image of Modi",
    bgColor: "bg-gray-400"
  },
  {
    id: 2,
    title: "An autonomous\nbody,\nRegd Under\nGovernment\nof India",
    image: gandhi,
    alt: "Official representative image of Gandhi",
    bgColor: "bg-gray-100"
  },
  // Duplicate the first slide for seamless looping
  {
    id: 3,
    title: "An autonomous\nbody,\nRegd Under\nGovernment\nof India",
    image: indira,
    alt: "Official representative image of Modi",
    bgColor: "bg-gray-400"
  }
];

function Hero() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const moveSlide = () => {
      const max = slider.scrollWidth - slider.clientWidth;
      const left = slider.clientWidth;

      if (slider.scrollLeft >= max - left) {
        // Reset to the start after the last slide
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left, behavior: 'smooth' });
      }
    };

    const interval = setInterval(moveSlide, 3000); // Adjusted to 3000ms for a smoother transition
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  // Handlers for left and right buttons
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className="relative flex flex-col md:flex-row bg-gray-100 h-screen">
      {/* Left Arrow Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10"
      >
        ❮
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10"
      >
        ❯
      </button>

      <div
        ref={sliderRef}
        className="h-full w-full overflow-hidden flex flex-nowrap text-center"
        id="slider"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${slide.bgColor} text-white space-y-4 flex-none w-full h-full flex flex-col items-center justify-center`}
          >
            <div className="flex flex-col md:flex-row bg-gray-100 h-full">
              {/* Left Text Section */}
              <div className="flex flex-col items-start justify-center bg-gray-700 px-6 py-10 md:w-2/5 lg:px-24 h-full">
                <h1 className="mb-4 whitespace-pre-line text-4xl font-bold leading-tight text-gray-100 md:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>
              </div>

              {/* Right Image Section */}
              <div className="md:w-3/5 h-full flex items-center">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="object-cover w-full h-full shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
