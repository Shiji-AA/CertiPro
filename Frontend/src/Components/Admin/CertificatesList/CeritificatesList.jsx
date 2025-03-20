import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstanceAdmin } from "../../../api/axiosInstance";
import toast from "react-hot-toast";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Swal from 'sweetalert2';


const CertificatesList = () => {
  const [certificatesDetails, setCertificatesDetails] = useState([]);
  useEffect(() => {
    axiosInstanceAdmin
      .get("/getallcertificates")
      .then((response) => {
        console.log(response.data.certificatesDetails,"certificatesDetails")
        if (response.data.certificatesDetails) {
          setCertificatesDetails(response.data.certificatesDetails);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data. Please try again later.");
      });
  }, []);
  
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this certificate!",
      icon: "warning",    
    })
    .then((willDelete) => {
      if (willDelete) {
        axiosInstanceAdmin
          .delete(`/deletecertificate/${id}`)
          .then(() => {
            setCertificatesDetails(
              certificatesDetails.filter((certificate) => certificate._id !== id)
            );
            toast.success("Certificate deleted successfully");
          })
          .catch((error) => {
            console.error("Error deleting certificate", error);
            toast.error("Error in deleting certificate");
          });
      }
    });
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gray-200 to-white p-4 rounded-lg">
        <div className="px-3 mt-10">
          <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-white p-4 sm:flex sm:justify-between items-center rounded-t-lg">
              <h3 className="text-2xl font-bold mb-4 sm:mb-0 sm:mr-4 text-teal-900">
                Certificates Table
              </h3>
              <Link to="/addcertificate">
                <button className="bg-teal-500 text-white px-3 py-1 rounded-lg ">
                  Add New Admission Details
                </button>
              </Link>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="table text-gray-400 border-separate space-y-6 text-sm w-full">
                <thead className="bg-teal-900 text-white">
                  <tr>
                    <th className="p-3">Sl No</th>
                    <th className="p-3 text-left">Admission No</th>
                    <th className="p-3 text-left">Student Name</th>
                    <th className="p-3 text-left">Course Name</th>
                    <th className="p-3 text-left">Certificate Name</th>               
                    <th className="p-3 text-left">Course Duration</th>
                    <th className="p-3 text-left">Student Photo</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {certificatesDetails.map((certificate, index) => (
                    <tr key={certificate._id} className="bg-teal-100 lg:text-black">
                      <td className="p-3 font-medium capitalize">
                        {index + 1}
                      </td>
                      <td className="p-3">{certificate.admissionNo}</td>
                      <td className="p-3">{certificate.studentName}</td>   
                       <td className="p-3">{certificate.courseName}</td>
                       <td className="p-3">
  {Array.isArray(certificate.certificateName) ? (
    <ul className="list-disc pl-4">
      {certificate.certificateName.map((cert, i) => (
        <li key={i}>{cert}</li>
      ))}
    </ul>
  ) : (
    certificate.certificateName
  )}
</td>

                   
                      <td className="p-3">{certificate.courseDuration}</td>                                  
                     <td className="p-3">
        {/* Render the image or fallback text */}
        {certificate.studentPhoto ? (
          <img
            src={certificate.studentPhoto}
            alt="Certificate"
            className="w-16 h-16 object-cover rounded-md"
          />
        ) : (
          <span>No image available</span>
        )}
      </td>
                      <td className="p-5">
                        <Link to={`/editcertificate/${certificate._id}`}>
                          <button className="px-6 py-2 mr-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
                            Edit
                          </button>
                        </Link>

                        <button
                          onClick={() => handleDelete(certificate._id)}
                          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

                  {!certificatesDetails.length && (
                    <tr>
                      <td colSpan={4} className="text-center py-4 text-gray-500">
                        No certificates found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificatesList;
