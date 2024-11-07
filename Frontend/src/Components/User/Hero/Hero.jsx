//import Slider from 'react-slick';
import modi from '../../../assets/modi.jpg';
//import gandhi from '../../../assets/gandhi.jpg'
function Hero() {
  // Slider settings
  // const settings = {
  //   dots: true,               // Show navigation dots
  //   infinite: true,           // Loop through slides infinitely
  //   speed: 500,               // Transition speed in ms
  //   slidesToShow: 1,          // Show one slide at a time
  //   slidesToScroll: 1,        // Scroll one slide at a time
  //   autoplay: true,           // Enable autoplay
  //   autoplaySpeed: 5000,      // Autoplay interval in ms
  // };

  return (
  
    <div className="flex flex-col md:flex-row bg-gray-100">
    {/* Left Text Section */}
    <div className="flex flex-col items-start justify-center px-6 py-10 md:w-2/5 lg:px-24">
      <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-800 md:text-4xl lg:text-5xl">
        An autonomous
        <br /> body,
        <br /> Regd Under
        <br /> Government
        <br /> of India
      </h1>
   
    </div>

    {/* Right Image Section */}
    <div className="md:w-3/5">
      <img
        src={modi}
        alt="official representative"
        className="object-cover w-full h-64 md:h-full  shadow-lg"
        loading="lazy"
      />
    </div>
  </div>
 
  );
}

export default Hero;
