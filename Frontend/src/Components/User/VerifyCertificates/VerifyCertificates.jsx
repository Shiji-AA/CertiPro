import { useState } from "react";
import { axiosInstance } from "../../../api/axiosInstance";

function VerifyCertificates() {
  const [certificateId, setCertificateId] = useState("");
  const [certificateDetails, setCertificateDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    setError(null); // Clear previous errors

    try {
      // Make a GET request to fetch certificate details by certificateId
      const response = await axiosInstance.get(`/getcertificatebyid/${certificateId}`);

      if (response.data.data) {
        // If certificate found, update the state with certificate details
        setCertificateDetails(response.data.data); // Use response.data.data
      } else {
        setError("Certificate not found or invalid.");
      }
    } catch (error) {
      console.log(error); // Log the error to console for debugging
      setError("An error occurred while fetching the certificate.");
    } finally {
      setLoading(false); // Set loading to false once done
    }
  };

  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Verify Your Certificate</h2>
          <p className="text-lg text-gray-500 mt-2">Enter the certificate ID to verify the details.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="certificateId" className="block text-lg font-medium text-gray-700">
                Certificate ID
              </label>
              <input
                type="text"
                id="certificateId"
                placeholder="Enter your Certificate ID"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)} // Update state with input value
                className="w-full mt-2 p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Verify Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </form>
        </div>

        {/* Display Certificate Details */}
        {certificateDetails && (
          <div className="mt-8 bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800">Certificate Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <p><strong className="text-gray-600">Certificate ID:</strong> {certificateDetails.certificateId}</p>
                <p><strong className="text-gray-600">Certificate Name:</strong> {certificateDetails.certificateName}</p>
                <p><strong className="text-gray-600">Student Name:</strong> {certificateDetails.studentName}</p>
                <p><strong className="text-gray-600">Course Name:</strong> {certificateDetails.courseName}</p>
                <p><strong className="text-gray-600">Certificate Date:</strong> {new Date(certificateDetails.certificateDate).toLocaleDateString()}</p>
              </div>

              <div className="flex justify-center items-center">
                {certificateDetails.certificatePhoto && (
                  <img
                    src={certificateDetails.certificatePhoto}
                    alt="Certificate"
                    className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default VerifyCertificates;
