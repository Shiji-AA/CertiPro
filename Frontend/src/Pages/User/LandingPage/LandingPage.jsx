
import Navbar from '../../../Components/User/Navbar/Navbar'
import Hero from '../../../Components/User/Hero/Hero'
//import Statistics from '../../../Components/User/Statistics/Statistics'
//import WhyChooseUs from '../../../Components/User/WhyChooseUs/WhyChooseUs'
import Footer from '../../../Components/User/Footer/Footer'
import AllCertificatesDetails from '../AllCertificatesDetails/AllCertificatesDetails'
//import Cards from '../../../Components/User/Cards/Cards'
//import Hero1 from '../../../Components/User/Hero/Hero1'
//import Quotes from '../../../Components/User/Quotes/Quotes'
//import Hero2 from '../../../Components/User/Hero/Hero2'



function LandingPage() {
    return (
        <div>
            <Navbar/>
            <Hero/>   
            <AllCertificatesDetails/>
            
            {/* <Statistics/>               
            <WhyChooseUs/>    */}
            {/* <Cards/>
    
            <Hero1/>
            <Quotes/>
            <Hero2/> */}
                      
            <Footer/>
           
           
        </div>
    )
}

export default LandingPage
