import cat4 from '../../../assets/cat4.jpg'

function Hero3() {
  return (
    <>
      <section className="grid grid-cols-1 gap-0 bg-gray-200 md:grid-cols h-80">
        <div>
          <img
            src={cat4}
            alt="tutor"
            className="object-cover w-full h-64 md:h-80 bg-gray-100"
            loading="lazy"
          />
          
        </div>
      </section>
    </>
  );
}

export default Hero3;
