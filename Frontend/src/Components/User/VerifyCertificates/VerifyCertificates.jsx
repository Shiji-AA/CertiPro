function VerifyCertificates() {
    return (
      <>
        <section className="text-gray-600 body-font relative">
          <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
            <div className="w-3/5 px-4 sm:px-6 lg:px-8">
              <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-1 "> 
                
                  {/* New VERIFY CERTIFICATE Section */}
                  <div className="flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 sm:rounded-lg w-full">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-6">VERIFY CERTIFICATE</h2>
  
                    {/* Input Field */}
                    <input
                      type="text"
                      placeholder="Enter your register number"
                      className="w-80 p-3 text-lg border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
  
                    {/* Verify Button */}
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      VERIFY
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default VerifyCertificates;
  