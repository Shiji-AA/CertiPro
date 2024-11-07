import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function MapImages() {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
          <div className="w-full px-4 sm:px-6 lg:px-8"> {/* Removed max-w-7xl and set to full width */}
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Contact Form Section */}
                <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg w-full"> {/* Ensure full width */}
                  <h1 className="text-4xl sm:text-4xl text-gray-800 dark:text-white font-bold tracking-tight">
                    Get in touch
                  </h1>
                  <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 mt-2 tracking-tight">
                    Have a question? We d love to hear from you.
                  </p>

                  {/* Map Embed with gap between maps */}
                  <div className="flex flex-col mt-8">
                    <div className="bg-white p-1 shadow-lg mb-4 w-full"> {/* Ensure full width */}
                      <iframe
                        width="100%"
                        height="200"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="map"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Arcite school of technical education kottiyam&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      ></iframe>
                    </div>

                    <div className="bg-white p-1 shadow-lg mb-4 w-full"> {/* Ensure full width */}
                      <iframe
                        width="100%"
                        height="200"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="map"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Arcite school of technical education kochi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      ></iframe>
                    </div>

                    <div className="bg-white p-1 shadow-lg mb-2 w-full"> {/* Ensure full width */}
                      <iframe
                        width="100%"
                        height="200"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="map"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Arcite school of technical education kadappakada&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Contact Details Section */}
                <div className="p-6 mr-2  bg-gray-100 dark:bg-gray-800 sm:rounded-lg w-full"> {/* Ensure full width */}
                  {/* Campus Addresses */}
                  <div className="flex items-center mt-24 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-blue-400"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="ml-4 tracking-wide w-80 ">
                      <h1 className="text-md font-bold">Kottiyam Campus</h1>
                      2nd floor SAS Arcade, Opp Vyapara Bhavan, Kottiyam,
                      Kollam, Kerala 691571
                    </div>
                  </div>

                    {/* Campus Addresses */}
                    <div className="flex items-center mt-10  text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-blue-400"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="ml-4 tracking-wide w-80 ">
                      <h1 className="text-md font-bold">Kochi Campus</h1>
                      2nd floor SAS Arcade, Opp Vyapara Bhavan, Kottiyam,
                      Kollam, Kerala 691571
                    </div>
                  </div>


                    {/* Campus Addresses */}
                    <div className="flex items-center mt-10 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-blue-400"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="ml-4 tracking-wide w-80 ">
                      <h1 className="text-md font-bold">Kadappakada Campus</h1>
                      2nd floor SAS Arcade, Opp Vyapara Bhavan, Kottiyam,
                      Kollam, Kerala 691571
                    </div>
                  </div>
               
                  <div className="flex items-center mt-6 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="#3B82F6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-6 h-5 text-gray-500"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>

                    <div className="ml-3 mt-4">
                      <div className="flex items-baseline">
                        <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
                          Email Us Directly
                        </div>
                      </div>
                      <div className="text-md font-semibold text-gray-600 dark:text-gray-400 mt-2">
                        info@arcite.in
                      </div>
                    </div>
                  </div>


                  <div className="flex items-center mt-6 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="#3B82F6" /* Light blue color */
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-6 h-5" /* Medium size */
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>

                    <div className="ml-3">
                      <div className="flex items-baseline">
                        <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
                          Phone
                        </div>
                      </div>
                      <div className="text-md font-semibold text-gray-600 dark:text-gray-400 mt-2">
                        +91-799-421-1144
                      </div>
                    </div>
                  </div>

                
                  <div className="flex items-center mt-6 text-gray-600 dark:text-gray-400">               
                    <div className="ml-9">
                      <div className="flex items-baseline ">
                        <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
                          Follow Us
                        </div>
                      </div>
                      <div className="text-md font-semibold text-gray-600 dark:text-gray-400">
                        
                    <div className="flex gap-4 cursor-pointer mt-2">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        size="1.5x"
                        style={{
                          backgroundColor: "#e7f3ff",
                          color: "#3b5998",
                          padding: "8px",
                        }}
                      />

                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="1.5x"
                        style={{
                          backgroundColor: "#FFE5E5",
                          color: "#B22222",
                          padding: "8px",
                        }}
                      />
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        size="1.5x"
                        style={{
                          backgroundColor: "#e7f3ff",
                          color: "#3b5998",
                          padding: "8px",
                        }}
                      />
                      <FontAwesomeIcon
                        icon={faYoutube}
                        size="1.5x"
                        style={{
                          backgroundColor: "#FFE5E5",
                          color: "#B22222",
                          padding: "8px",
                        }}
                      />
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="1.5x"
                        style={{
                          backgroundColor: "#e7f3ff",
                          color: "#3b5998",
                          padding: "8px",
                        }}
                      />
                    </div>
                      </div>
                    </div>
                  </div>  
                </div>

                {/* Contact Details Section */}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MapImages;
