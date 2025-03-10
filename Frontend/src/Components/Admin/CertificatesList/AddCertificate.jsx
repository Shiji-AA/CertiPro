import { useState } from "react";
import { axiosInstanceAdmin } from "../../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useFormik } from "formik";

function AddCertificate() {
  const navigate = useNavigate();
  
  // State variables for loading and image preview
  const [loading, setLoading] = useState(false);

  // Validation logic for formik
  const validate = (values) => {
    const errors = {};

    if (!values.certificateId) {
      errors.certificateId = "Required";
    } else if (values.certificateId.length < 3) {
      errors.certificateId = "Certificate ID must be 3 characters or more";
    }

    if (!values.studentName) {
      errors.studentName = "Required";
    } else if (values.studentName.length < 3) {
      errors.studentName = "Student Name must be 3 characters or more";
    }

    if (!values.courseName) {
      errors.courseName = "Required";
    } else if (values.courseName.length < 3) {
      errors.courseName = "Course Name must be 3 characters or more";
    }

    if (!values.certificateName) {
      errors.certificateName = "Required";
    } else if (values.certificateName.length < 3) {
      errors.certificateName = "Certificate Name must be 3 characters or more";
    }

    if (values.certificateDate) {
      const isValidDate = !isNaN(new Date(values.certificateDate).getTime());
      if (!isValidDate) errors.certificateDate = "Invalid certificate date";
    }

    // Image validation
    if (values.certificatePhoto && values.certificatePhoto instanceof File) {
      const allowedFileTypes = ["png", "jpg", "jpeg"];
      const fileExtension = values.certificatePhoto.name.split(".").pop().toLowerCase();
      const maxSize = 5 * 1024 * 1024; // 5 MB limit

      if (!allowedFileTypes.includes(fileExtension)) {
        errors.certificatePhoto = `Invalid file type. Only ${allowedFileTypes.join(", ")} are allowed.`;
      }

      if (values.certificatePhoto.size > maxSize) {
        errors.certificatePhoto = "File size exceeds 5 MB. Please upload a smaller file.";
      }
    }

    return errors;
  };

  // Formik setup
  const formik = useFormik({
    initialValues: {
      certificateId: "",
      certificateName: "",
      studentName: "",
      courseName: "",
      certificateDate: "",
      certificatePhoto: null, // File input for certificate photo
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        let imgUrl = null;

        // If there's an image, upload it to Cloudinary
        if (values.certificatePhoto && values.certificatePhoto instanceof File) {
          const formData = new FormData();
          formData.append("file", values.certificatePhoto);
          formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
          formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
            formData
          );

          if (response.data && response.data.url) {
            imgUrl = response.data.url;
          }
        }

        // Send the form data to the backend
        const addResponse = await axiosInstanceAdmin.post(`/addcertificate`, {
          certificateId: values.certificateId,
          certificateName: values.certificateName,
          studentName: values.studentName,
          courseName: values.courseName,
          certificateDate: values.certificateDate,
          certificatePhoto: imgUrl || values.certificatePhoto, // Use imgUrl if an image was uploaded
        });

        if (addResponse.data) {
          toast.success("Certificate added successfully!");
          navigate("/getallcertificates");
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

  // Image preview logic
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("certificatePhoto", file); // Set the file in Formik's state
      const previewUrl = URL.createObjectURL(file);
      formik.setFieldValue("imagePreview", previewUrl); // Update preview URL in Formik's state
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="bg-gradient-to-b from-tealLight to-white p-4 rounded-lg">
        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <h2 className="text-2xl font-bold px-6 py-4 bg-tealDark text-white rounded-t-lg">
            Add Certificate
          </h2>
          <form onSubmit={formik.handleSubmit} className="p-6">
            {/* Certificate ID */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Certificate ID</label>
              <input
                type="text"
                name="certificateId"
                value={formik.values.certificateId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter certificate ID"
                className="mt-1 p-2 w-full border border-tealLight rounded-md focus:ring-tealDark focus:border-tealDark"
              />
              {formik.touched.certificateId && formik.errors.certificateId && (
                <div className="text-red-500 text-sm">{formik.errors.certificateId}</div>
              )}
            </div>

            {/* Certificate Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Certificate Name</label>
              <input
                type="text"
                name="certificateName"
                value={formik.values.certificateName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter certificate name"
                className="mt-1 p-2 w-full border border-teal-500 rounded-md focus:ring-teal-900 focus:border-tealDark"
              />
              {formik.touched.certificateName && formik.errors.certificateName && (
                <div className="text-red-500 text-sm">{formik.errors.certificateName}</div>
              )}
            </div>

            {/* Student Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Student Name</label>
              <input
                type="text"
                name="studentName"
                value={formik.values.studentName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter student name"
                className="mt-1 p-2 w-full border border-tealLight rounded-md focus:ring-tealDark focus:border-tealDark"
              />
              {formik.touched.studentName && formik.errors.studentName && (
                <div className="text-red-500 text-sm">{formik.errors.studentName}</div>
              )}
            </div>

            {/* Course Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Course Name</label>
              <input
                type="text"
                name="courseName"
                value={formik.values.courseName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter course name"
                className="mt-1 p-2 w-full border border-tealLight rounded-md focus:ring-tealDark focus:border-tealDark"
              />
              {formik.touched.courseName && formik.errors.courseName && (
                <div className="text-red-500 text-sm">{formik.errors.courseName}</div>
              )}
            </div>

            {/* Certificate Date */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Certificate Date</label>
              <input
                type="date"
                name="certificateDate"
                value={formik.values.certificateDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 p-2 w-full border border-tealLight rounded-md focus:ring-tealDark focus:border-tealDark"
              />
              {formik.touched.certificateDate && formik.errors.certificateDate && (
                <div className="text-red-500 text-sm">{formik.errors.certificateDate}</div>
              )}
            </div>

            {/* Upload Certificate Photo */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Upload Certificate Image</label>
              <input
                type="file"
                name="certificatePhoto"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 p-2 w-full border border-tealLight rounded-md focus:ring-tealDark focus:border-tealDark"
              />
              {formik.touched.certificatePhoto && formik.errors.certificatePhoto && (
                <div className="text-red-500 text-sm">{formik.errors.certificatePhoto}</div>
              )}
            </div>

            {/* Show Image Preview */}
            {formik.values.imagePreview && (
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700">Preview:</p>
                <img
                  src={formik.values.imagePreview}
                  alt="Preview"
                  className="mt-2 w-48 h-32 object-cover border rounded-md"
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-900 focus:ring-2 focus:ring-tealLight"
                disabled={loading}
              >
                {loading ? "Uploading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCertificate;
