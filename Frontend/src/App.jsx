import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import HomePage from "./Pages/User/HomePage/HomePage"
import Register from './Components/User/Register/Register'
import Login from './Components/User/Login/Login'
import {Toaster} from 'react-hot-toast';
import LandingPage from './Pages/User/LandingPage/LandingPage'
import AllCertificatesDetails from './Pages/User/AllCertificatesDetails/AllCertificatesDetails'


   //Admin side

import AdminLogin from './Components/Admin/AdminLogin/AdminLogin'
import AdminDashboardPage from './Pages/Admin/AdminDashboardPage'
import AddCertificate from './Components/Admin/CertificatesList/AddCertificate'
import CertificatesList from './Components/Admin/CertificatesList/CeritificatesList'
import EditCertificate from './Components/Admin/CertificatesList/EditCertificate'
import PrivatePages from './Components/PrivatePages/PrivatePages'



function App() {
  return (
   <Router>
   <Toaster position="top-right"/>
   <Routes>
     {/* UserSide   */}  
   <Route path="/" element={<LandingPage/>} />
   <Route path="/home" element={<HomePage/>} />
   <Route path="/register" element={< Register/>} />
   <Route path="/login" element={<Login/>} />  
   <Route path="/allCertificatesAdmissionNo" element={<AllCertificatesDetails/>} />

    {/* AdminSide   */}  
  <Route path="/admin" element={<AdminLogin/>} />  
  <Route element={<PrivatePages/>}>
  <Route path="/admindashboard" element={<AdminDashboardPage />} />
  <Route path="/addcertificate" element={<AddCertificate />} />
  <Route path="/getallcertificates" element={<CertificatesList />} />
  <Route path="/editcertificate/:id" element={<EditCertificate/>} />
  </Route>
  </Routes>
   </Router>
  )
}

export default App
