import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import logoArcite from "../../../assets/logoArcite.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../Redux/Slices/AuthSlice";
function Navbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userdata);
  console.log(user,"user")
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
 
      <nav className="flex flex-wrap items-center justify-between p-3 bg-white">
        <img src={logoArcite} className="" alt="ARCITE" height={70} width={150} />

        <div className="flex md:hidden">
          <button onClick={toggleMenu}>
            <img
              className={menuOpen ? "hidden" : "block"}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
              alt="Menu"
            />
            <img
              className={menuOpen ? "block" : "hidden"}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
              alt="Close"
            />
          </button>
        </div>
        <div
          className={`w-full flex-grow md:flex md:items-center md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className=" ml-50 text-right text-bold mt-5 md:mt-0 border-t-2 border-white-900 md:border-none">
            <Link
              to="/"
              className="block md:inline-block text-black font-semibold hover:text-blue-500 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Home
            </Link>

            {/* <Link
              to="/aboutus"
              className="block md:inline-block text-black font-semibold hover:text-blue-500 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              About Us
            </Link> */}

            {/* <Link
              to="/wirp"
              className="block md:inline-block text-black font-semibold hover:text-blue-500 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              WIRP
            </Link> */}

            {/* <Link
              to="/certificate"
              className="block md:inline-block text-black font-semibold hover:text-blue-500 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Certificate Validation
            </Link> */}

            <Link
              to="/allCertificatesAdmissionNo"
              className="block md:inline-block text-black font-semibold hover:text-blue-500 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Admission No
            </Link>

            {/* <Link
              to="/affiliation"
              className="block md:inline-block text-black font-semibold hover:text-blue-500 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Affiliation
            </Link> */}

            {/* <Link
              to="/contact"
              className="block md:inline-block text-black font-semibold hover:text-blue-500 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Contact us
            </Link> */}
            <button
              onClick={handleLogout}
              className="bg-teal-400 text-black font-semibold hover:text-teal-900 px-5 py-2 border-b-2 border-white-900 md:border-none"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
