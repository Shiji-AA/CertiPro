import cource1 from "../../../assets/cource1.jpg"
import cource2 from "../../../assets/cource2.jpg"
import cource3 from "../../../assets/cource3.jpg"
import cource4 from "../../../assets/cource4.jpg"

function Cards() {
    return (
        <div className="px-4"> {/* Adds padding on both sides */}
         
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-lg mx-auto">
                <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <img className="object-cover w-full h-48" src={cource1} alt="Flower and sky" style={{ opacity: 0.7 }} />
                    
                    <div className="absolute top-0 left-0 px-4 py-4">
                        <p className="leading-normal text-gray-100">Duration: 2 Years</p>
                        <h4 className="mb-3 text-xl py-4 font-semibold tracking-tight text-white">Diploma in Electrical <br />Engineering</h4>
                        <button className="leading-normal border border-white p-1 text-gray-100">APPLY NOW</button>
                    </div>
                </div>

                {/* Repeat for other cards */}
                <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <img className="object-cover w-full h-48" src={cource2} alt="Flower and sky" style={{ opacity: 0.7 }} />
                    
                    <div className="absolute top-0 left-0 px-4 py-4">
                        <p className="leading-normal text-gray-100">Duration: 2 Years</p>
                        <h4 className="mb-3 text-xl py-4 font-semibold tracking-tight text-white">Diploma in Electrical <br />Engineering</h4>
                        <button className="leading-normal border border-white p-1 text-gray-100">APPLY NOW</button>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <img className="object-cover w-full h-48" src={cource3} alt="Flower and sky" style={{ opacity: 0.7 }}/>
                    
                    <div className="absolute top-0 left-0 px-4 py-4">
                        <p className="leading-normal text-gray-100">Duration: 2 Years</p>
                        <h4 className="mb-3 text-xl py-4 font-semibold tracking-tight text-white">Diploma in Electrical <br />Engineering</h4>
                        <button className="leading-normal border border-white p-1 text-gray-100">APPLY NOW</button>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <img className="object-cover w-full h-48" src={cource4}alt="Flower and sky"style={{ opacity: 0.7 }} />
                    
                    <div className="absolute top-0 left-0 px-4 py-4">
                        <p className="leading-normal text-gray-100">Duration: 2 Years</p>
                        <h4 className="mb-3 text-xl py-4 font-semibold tracking-tight text-white">Diploma in Electrical <br />Engineering</h4>
                        <button className="leading-normal border border-white p-1 text-gray-100">APPLY NOW</button>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <img className="object-cover w-full h-48" src={cource1} alt="Flower and sky"style={{ opacity: 0.7 }} />
                    
                    <div className="absolute top-0 left-0 px-4 py-4">
                        <p className="leading-normal text-gray-100">Duration: 2 Years</p>
                        <h4 className="mb-3 text-xl py-4 font-semibold tracking-tight text-white">Diploma in Electrical <br />Engineering</h4>
                        <button className="leading-normal border border-white p-1 text-gray-100">APPLY NOW</button>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <img className="object-cover w-full h-48" src={cource3}alt="Flower and sky" style={{ opacity: 0.7 }}/>
                    
                    <div className="absolute top-0 left-0 px-4 py-4">
                        <p className="leading-normal text-gray-100">Duration: 2 Years</p>
                        <h4 className="mb-3 text-xl py-4 font-semibold tracking-tight text-white">Diploma in Electrical <br />Engineering</h4>
                        <button className="leading-normal border border-white p-1 text-gray-100">APPLY NOW</button>
                    </div>
                </div>

                {/* Additional cards */}
            </div>
        </div>
    );
}

export default Cards;
