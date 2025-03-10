import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import HomePage from "./Pages/User/HomePage/HomePage"
import AboutUs from './Pages/User/AboutUs/AboutUs'
import Wirp from './Pages/User/Wirp/Wirp'
import CertificateValidation from './Pages/User/CertificateValidation/CertificateValidation'
import Affiliation from './Pages/User/Affiliation/Affiliation'
import ContactUs from './Pages/User/ContactUs/ContactUs'
import Register from './Components/User/Register/Register'
import Login from './Components/User/Login/Login'
import {Toaster} from 'react-hot-toast';
import LandingPage from './Pages/User/LandingPage/LandingPage'

   //Admin side

import AdminLogin from './Components/Admin/AdminLogin/AdminLogin'
import AdminDashboardPage from './Pages/Admin/AdminDashboardPage'
import AddCertificate from './Components/Admin/CertificatesList/AddCertificate'
import CertificatesList from './Components/Admin/CertificatesList/CeritificatesList'
import EditCertificate from './Components/Admin/CertificatesList/EditCertificate'


function App() {
  return (
   <Router>
   <Toaster position="top-right"/>
   <Routes>
   <Route path="/" element={<LandingPage/>} />
   <Route path="/home" element={<HomePage/>} />
   <Route path="/register" element={< Register/>} />
   <Route path="/login" element={<Login/>} />
   <Route path="/aboutus" element={<AboutUs/>} />
   <Route path="/wirp" element={<Wirp/>} />
   <Route path="/certificate" element={<CertificateValidation/>} />
   <Route path="/affiliation" element={<Affiliation/>} />
   <Route path="/contact" element={<ContactUs />} />

    {/* AdminSide   */}  
  <Route path="/admin" element={<AdminLogin/>} />  
  <Route path="/admindashboard" element={<AdminDashboardPage />} />
  <Route path="/addcertificate" element={<AddCertificate />} />
  <Route path="/getallcertificates" element={<CertificatesList />} />
  <Route path="/editcertificate/:id" element={<EditCertificate/>} />

   </Routes>
   </Router>
  )
}

export default App
