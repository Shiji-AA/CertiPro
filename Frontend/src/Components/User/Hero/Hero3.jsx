import cat4 from "../../../assets/hero.jpg";


function Hero3() {
  return (
    <section className="relative h-[320px] md:h-[420px] w-full flex flex-col items-center justify-center text-white">
      {/* Background Image with Black Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${cat4})`,
          filter: "brightness(50%)", // Darkens the background
        }}
      ></div>

      {/* Overlay for Extra Darkness */}
      <div className="absolute inset-0 bg-gray-800 opacity-30"></div>

      {/* Centered Content */}
      <div className="relative text-center">
        <h1 className="text-5xl md:text-6xl font-bold">Certificate Validation</h1>
        
        {/* Breadcrumb Navigation */}
        <nav className="mt-2 text-lg">
          <a
            href="https://technical.arcite.in/"
            className="text-white hover:underline"
          >
            Home
          </a>
          <span className="mx-2"> &gt; </span>
          <span className="text-gray-300">Certificate Validation</span>
        </nav>
      </div>
    </section>
  );
}

export default Hero3;
