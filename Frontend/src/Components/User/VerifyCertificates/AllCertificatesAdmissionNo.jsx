import { useState } from "react";
import { axiosInstance } from "../../../api/axiosInstance";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast"

function AllCertificatesAdmissionNo() {
  const [admissionNo, setAdmissionNo] = useState("");
  const [certificateDetails, setCertificateDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setCertificateDetails(null);  // Clear previous certificate details
  
    try {
      const response = await axiosInstance.get(`/allCertificatesAdmissionNo/${admissionNo}`);
      
      if (response.data.certificates.length > 0) {
        setCertificateDetails(response.data.certificates);
      } else {
        // No certificates found for the given admission number
        setError("No certificates found for this Admission No.");
        toast.error("No certificates found for this Admission No.");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {     
        setError("No certificates found for this Admission No.");
        toast.error("No certificates found for this Admission No.");
      } else {      
        setError("An error occurred while fetching the certificates.");
        toast.error("An error occurred while fetching the certificates.");
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Verify Certificate</h2>
          <p className="text-lg text-gray-500 mt-2">Enter the Admission No to check certificate details.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="admissionNo" className="block text-lg font-medium text-gray-700">
              Admission No
            </label>
            <input
              type="text"
              id="admissionNo"
              placeholder="Enter Admission No"
              value={admissionNo}
              onChange={(e) => setAdmissionNo(e.target.value)}
              className="w-full mt-2 p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center py-3 text-lg font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-700 transition disabled:bg-teal-300"
            disabled={loading}
          >
            {loading ? <FaSpinner className="animate-spin mr-2" /> : "Verify"}
          </button>
        </form>
      </div>

      {/* Certificate Details Section */}
      {certificateDetails && (
        <div className="mt-8 max-w-4xl w-full">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Certificate Details</h3>
          <div className="grid gap-6">
            {certificateDetails.map((certificate, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
              >
                {/* Student Photo & Name */}
                <div className="flex flex-col items-center">
                  {certificate?.studentPhoto ? (
                    <img
                      src={certificate.studentPhoto}
                      alt="Student"
                      className="w-40 h-40 object-cover rounded-full shadow-xl"
                    />
                  ) : (
                    <div className="w-40 h-40 flex items-center justify-center bg-gray-200 text-gray-500 rounded-full">
                      No Image
                    </div>
                  )}
                  <p className="text-xl font-semibold text-teal-800 mt-3">{certificate?.studentName}</p>
                </div>

                {/* Certificate Details */}
                <div className="w-full mt-6 text-left">
                  <p className="text-lg text-teal-900 ">
                    <span className="font-medium text-gray-700">Admission No:</span> {certificate?.admissionNo}
                  </p>
                  <p className="text-lg text-teal-900">
                    <span className="font-medium text-gray-700">Course Name:</span> {certificate?.courseName}
                  </p>

                  {/* Certificate List */}
                  <p className="text-lg font-medium text-gray-700 mt-3">Certificates:</p>
                  <ul className="list-disc list-inside text-lg text-teal-700 pl-4">
                    {Array.isArray(certificate.certificateName) ? (
                      certificate.certificateName.map((name, idx) => (
                        <li key={idx}>{name}</li>
                      ))
                    ) : (
                      <li>{certificate.certificateName}</li>
                    )}
                  </ul>

                  <p className="text-lg mt-3 text-teal-900">
                    <span className="font-medium text-gray-700">Course Duration:</span> {certificate?.courseDuration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default AllCertificatesAdmissionNo;
