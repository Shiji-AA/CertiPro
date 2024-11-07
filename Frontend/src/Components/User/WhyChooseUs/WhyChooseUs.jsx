function WhyChooseUs() {
    return (
        <>
            <div className="h-full w-screen bg-gray-100 flex flex-col items-center py-10">
              {/* Heading Section */}
              <div className="text-center mb-10 px-4">
                <h1 className="text-3xl md:text-2xl mb-4" style={{ color: "blue" }}>
                    Why Choose Us ?
                </h1>
                <p className="text-gray-700 ">
                  There are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration variations of passages of <br/>Lorem Ipsum available in some form, by injected humour, 
                  or randomised words which dont look even slightly .
                </p>
              </div>
  
              {/* Service Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {/* Service Card 1 */}
                <div className="bg-blue-600 text-white rounded-md p-6 space-y-4">
                    <div className="flex space-x-4 items-center">
                        <div className="w-14 h-12 bg-gray-300 rounded-full">
                            <img alt="avatar" src="" className="rounded-full w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Experienced Staff</h2>
                        </div>
                    </div>
                </div>
  
                {/* Service Card 2 */}
                <div className="bg-blue-400 text-white rounded-md p-6 space-y-4">
                    <div className="flex space-x-4 items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full">
                            <img alt="avatar" src="" className="rounded-full w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Constantly Evolving</h2>
                        </div>
                    </div>
                </div>
  
                {/* Service Card 3 */}
                <div className="bg-yellow-400 text-white rounded-md p-6 space-y-4">
                    <div className="flex space-x-4 items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full">
                            <img alt="avatar" src="" className="rounded-full w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Student Focused</h2>
                        </div>
                    </div>
                </div>

                <div className="bg-yellow-400 text-white rounded-md p-6 space-y-4">
                    <div className="flex space-x-4 items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full">
                            <img alt="avatar" src="" className="rounded-full w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Student Focused</h2>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-400 text-white rounded-md p-6 space-y-4">
                    <div className="flex space-x-4 items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full">
                            <img alt="avatar" src="" className="rounded-full w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Process Oriented</h2>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-600 text-white rounded-md p-6 space-y-4">
                    <div className="flex space-x-4 items-center">
                        <div className="w-14 h-12 bg-gray-300 rounded-full">
                            <img alt="avatar" src="" className="rounded-full w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Experienced Staff</h2>
                        </div>
                    </div>
                </div>
                
                {/* Additional Service Cards can follow the same structure */}
              </div>
            </div>
        </>
    );
  }
  
  export default WhyChooseUs;
  