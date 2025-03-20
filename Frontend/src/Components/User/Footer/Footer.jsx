import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
import logoArcite from "../../../assets/logoArcite.png";

function Footer() {
  return (
    <>
      <div className="border-t border-black">
        <footer className="bg-gray-100 dark:bg-black">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="grid md:grid-cols-6 gap-4">
              {/* First div - takes 2 columns */}
              <div className="col-span-2">
                <Link to="" className="flex items-center">
                  <img src={logoArcite} className="h-10 w-32 mr-3" alt="ARCITE" />
                </Link>
                <p className="text-sm mt-6 text-gray-700 dark:text-gray-400">
                  ARCITE, an ISO 9001-2015 certified institution, was founded in
                  2015 with the goal of fostering a better engineering culture
                  by providing quality and affordable training programs to the
                  emerging engineering community.
                </p>

                <div className="flex items-center mt-6 text-gray-600 dark:text-gray-400">
                  <div>
                    <div className="flex items-baseline">
                      <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
                        Follow Us
                      </div>
                    </div>
                    <div className="flex gap-4 mt-2">
                      <a
                        href="https://www.facebook.com/arciteschooloftechnicaleducation/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          size="1x"
                          style={{
                            backgroundColor: "#e7f3ff",
                            color: "#3b5998",
                            padding: "8px",
                          }}
                        />
                      </a>

                      <a
                        href="https://www.instagram.com/arcite.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="1x"
                          style={{
                            backgroundColor: "#FFE5E5",
                            color: "#B22222",
                            padding: "8px",
                          }}
                        />
                      </a>
                      <a
                        href="https://x.com/arcite_in"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <FontAwesomeIcon
                          icon={faXTwitter}
                          size="1x"
                          style={{
                            backgroundColor: "#e7f3ff",
                            color: "#3b5998",
                            padding: "8px",
                          }}
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/@arciteschooloftechnicaledu6571"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <FontAwesomeIcon
                          icon={faYoutube}
                          size="1x"
                          style={{
                            backgroundColor: "#FFE5E5",
                            color: "#B22222",
                            padding: "8px",
                          }}
                        />
                      </a>

                      <a
                        href="https://www.linkedin.com/company/arc-institute-of-technical-education/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="1x"
                          style={{
                            backgroundColor: "#e7f3ff",
                            color: "#3b5998",
                            padding: "8px",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second div - takes 1 column */}
              <div className="col-span-1">
                <h2 className="mb-6 text-md font-semibold text-gray-1000 dark:text-white">
                  Departments
                </h2>
                <ul className="text-gray-900 dark:text-gray-600 font-small">
                  <li className="mb-1 text-sm">Mechanical Engineering</li>
                  <li className="mb-1 text-sm">Electrical Engineering</li>
                  <li className="mb-1 text-sm">Civil Engineering</li>
                  <li className="mb-1 text-sm">Data Science</li>
                  <li className="mb-1 text-sm">Media</li>
                </ul>
              </div>

              {/* Third div - takes 1 column */}
              <div className="col-span-1">
                <h2 className="mb-6 text-md font-semibold text-gray-1000 dark:text-white">
                  Our Concerns
                </h2>
                <ul className="text-gray-900 dark:text-gray-600 font-small">
                  <li className="mb-1 text-sm">
                    ARCITE School of Technical Education
                  </li>
                  <li className="mb-1 text-sm">
                    ARCITE School of Builders and Innovators
                  </li>
                  <li className="mb-1 text-sm">ARCITE School of Media</li>
                  <li className="mb-1 text-sm">
                    ARCITE School of Data Science
                  </li>
                </ul>
              </div>

              {/* Fourth div - takes 2 columns */}
              <div className="col-span-2">
                <h2 className="mb-6 text-md font-semibold text-gray-1000 dark:text-white">
                  Contact Us
                </h2>
                <ul className="text-gray-900 dark:text-gray-400 font-sm">
                  <li className="mb-1 flex items-center space-x-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-10 text-blue-400"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="ml-2 text-sm mt-6 text-gray-700 dark:text-gray-400">
                      Kottiyam Campus:Second floor SAS Arcade Opp.VyaparaBhavan
                      kottiyam Kollam Kerala 691571
                    </p>
                  </li>
                  <li className="mb-1 flex items-center space-x-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-10 text-blue-400"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="ml-2 text-sm mt-6 text-gray-700 dark:text-gray-400">
                      Kochi Campus:Second floor SAS Arcade Opp.VyaparaBhavan
                      kottiyam Kollam Kerala 691571
                    </p>
                  </li>
                  <li className="mb-1 flex items-center space-x-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-10 text-blue-400"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="ml-2 text-sm mt-6 text-gray-700 dark:text-gray-400">
                      Kadappakkada Campus:Second floor SAS Arcade
                      Opp.VyaparaBhavan kottiyam Kollam Kerala 691571
                    </p>
                  </li>
                  <li className="mb-1 flex items-center space-x-2">
                    <svg
                      fill="none"
                      stroke="#3B82F6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      className="w-6 h-5 text-gray-500"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="ml-2 text-sm mt-6 text-gray-700 dark:text-gray-400">
                      info@arcite.in
                    </p>
                  </li>
                  <li className="mb-1 flex items-center space-x-2">
                    <svg
                      fill="none"
                      stroke="#3B82F6" /* Light blue color */
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      className="w-6 h-5" /* Medium size */
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="ml-2 text-sm mt-6 text-gray-700 dark:text-gray-400">
                      +91-799 421 1144
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sm:flex sm:items-center sm:justify-center border-t border-gray-300 pt-6 mt-6">
              <span className="text-sm text-gray-900 sm:text-center dark:text-gray-400">
                © 2025{" "}
                <a href="https://flowbite.com/" className="">
                  Powered By ARCITE
                </a>
                
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
