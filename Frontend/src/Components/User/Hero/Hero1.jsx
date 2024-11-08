import cat2 from '../../../assets/cat2.jpg'
import about from '../../../assets/about.png'

function Hero1() {
  return (
    <>
      <section className="grid grid-cols-1 gap-0 bg-gray-200 md:grid-cols-2 h-100">
        
        {/* Left Section with Background Image and Overlay */}
        <div className="relative flex items-center justify-center h-full overflow-hidden bg-gray-700">
          {/* Background Image with Overlay */}
          <img 
            src={cat2} 
            alt="Flower and sky" 
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30" 
          />
          {/* Overlay Text */}
          <div className="relative text-center text-white px-6 py-4">
          <h4 className="mb-3 text-2xl font-semibold tracking-tight">Aproval For Arcite Courses</h4>
            <p className="leading-normal py-4">the updated List of approved courses published by Kerala PSC in their official Bulletin (September 15, 2014 edition Page 10) for the post of LD-Typist, Course is accepted so far as equivalent to KGTE Computer Word Processing.To view the list click link below.</p>

          </div>
        </div>

        {/* Right Section with Second Image */}
        <div>
          <img
            src={about}
            alt="tutor"
            className="object-cover w-full h-64 md:h-full bg-gray-100"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

export default Hero1;
