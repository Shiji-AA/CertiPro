import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import HomePage from "./Pages/User/HomePage/HomePage"
import AboutUs from './Pages/User/AboutUs/AboutUs'
import Wirp from './Pages/User/Wirp/Wirp'
import CertificateValidation from './Pages/User/CertificateValidation/CertificateValidation'
import Affiliation from './Pages/User/Affiliation/Affiliation'
import ContactUs from './Pages/User/ContactUs/ContactUs'



function App() {
  return (
   <Router>
   <Routes>
   <Route path="/" element={<HomePage/>} />
   <Route path="/aboutus" element={<AboutUs/>} />
   <Route path="/wirp" element={<Wirp/>} />
   <Route path="/certificate" element={<CertificateValidation/>} />
   <Route path="/affiliation" element={<Affiliation/>} />
   <Route path="/contact" element={<ContactUs />} />
   </Routes>
   </Router>
  )
}

export default App
