import { useState, useEffect } from "react";
import { axiosInstanceAdmin } from "../../../api/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";

function EditCertificate() {
  const { id } = useParams(); // Get certificate ID from URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Validation rules
  const validate = (values) => {
    const errors = {};
    if (!values.certificateId) errors.certificateId = "Required";
    if (!values.certificateName) errors.certificateName = "Required";
    if (!values.studentName) errors.studentName = "Required";
    if (!values.courseName) errors.courseName = "Required";
    if (!values.certificateDate) errors.certificateDate = "Required";
    return errors;
  };

  // Formik for form handling
  const formik = useFormik({
    initialValues: {
      certificateId: "",
      certificateName: "",
      studentName: "",
      courseName: "",
      certificateDate: "",
      image: null, // To hold file input
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        let imgUrl = values.image; // Keep existing image if not updated

        // If a new file is selected, upload to Cloudinary
        if (values.image instanceof File) {
          const data = new FormData();
          data.append("file", values.image);
          data.append("upload_preset", "Certipro");
          data.append("cloud_name", "shijiaa04");

          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/shijiaa04/image/upload",
            data
          );

          if (response.data && response.data.url) {
            imgUrl = response.data.url; // Update with new image URL
          }
        }

        // Update certificate details
        const updateResponse = await axiosInstanceAdmin.put(
          `/updateCertificate/${id}`,
          {
            certificateId: values.certificateId,
            certificateName: values.certificateName,
            studentName: values.studentName,
            courseName: values.courseName,
            certificateDate: values.certificateDate,
            certificatePhoto: imgUrl, // Use new or existing image URL
          }
        );

        if (updateResponse.data) {
          toast.success("Certificate updated successfully!");
          navigate("/admin/certificates");
        }
      } catch (error) {
        toast.error(
          error.response?.data?.error || "Failed to update certificate. Try again."
        );
      } finally {
        setLoading(false);
      }
    },
  });

  // Fetch existing certificate data
  useEffect(() => {
    axiosInstanceAdmin
      .get(`/getallcertificate1/${id}`)
      .then((response) => {
        if (response.data) {
          const { certificateId, certificateName, studentName, courseName, certificateDate, certificatePhoto } = response.data;

          formik.setValues({
            certificateId: certificateId || "",
            certificateName: certificateName || "",
            studentName: studentName || "",
            courseName: courseName || "",
            certificateDate: certificateDate || "",
            image: certificatePhoto || null, // Keep existing image
          });
        }
      })
      .catch((error) => console.error("Error fetching certificate:", error));
  }, [id]);

  return (
    <div className="bg-gradient-to-b from-gray-200 to-white p-4 rounded-lg min-h-screen">
      <form onSubmit={formik.handleSubmit} className="p-8 space-y-8">
        <div className="text-3xl font-semibold mb-8 text-center">
          Edit Certificate
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-md w-full mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
              {/* Certificate ID */}
              <div className="mb-4">
                <label htmlFor="certificateId" className="block text-gray-700 text-sm font-bold mb-2">
                  Certificate ID
                </label>
                <input
                  type="text"
                  id="certificateId"
                  name="certificateId"
                  className="w-full rounded-lg bg-gray-100 border border-gray-300 p-2"
                  value={formik.values.certificateId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {/* Certificate Name */}
              <div className="mb-4">
                <label htmlFor="certificateName" className="block text-gray-700 text-sm font-bold mb-2">
                  Certificate Name
                </label>
                <input
                  type="text"
                  id="certificateName"
                  name="certificateName"
                  className="w-full rounded-lg bg-gray-100 border border-gray-300 p-2"
                  value={formik.values.certificateName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {/* Image Upload */}
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                  Certificate Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="w-full border rounded p-2"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      formik.setFieldValue("image", file);
                    }
                  }}
                />
                {formik.values.image && (
                  <img
                    src={
                      typeof formik.values.image === "string"
                        ? formik.values.image
                        : URL.createObjectURL(formik.values.image)
                    }
                    alt="Certificate Preview"
                    className="mt-2 h-20 w-20 object-cover rounded"
                  />
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 text-white bg-teal-600 rounded-md hover:bg-teal-700"
              >
                {loading ? "Updating..." : "Update Certificate"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditCertificate;
