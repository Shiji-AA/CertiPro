import { useState, useEffect } from "react";
import { axiosInstanceAdmin } from "../../../api/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

function EditCertificate() {
  const { id } = useParams(); // Get certificate ID from URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Validation rules
  const validate = (values) => {
    const errors = {};

    if (!values.certificateId) {
      errors.certificateId = "Required";
    } else if (values.certificateId.length < 3) {
      errors.certificateId = "certificateId Must be 3 characters or more";
    }

    if (!values.studentName) {
      errors.studentName = "Required";
    } else if (values.studentName.length < 3) {
      errors.studentName = "Student Name Must be 3 characters or more";
    }
    if (!values.courseName) {
      errors.courseName = "Required";
    } else if (values.courseName.length < 3) {
      errors.courseName = "Must be 3 characters or more";
    }

    if (!values.certificateName) {
      errors.certificateName = "Required";
    } else if (values.certificateName.length < 3) {
      errors.certificateName = "CertificateName Must be 3 characters or more";
    }

    if (values.certificateDate) {
      const isValidDate = !isNaN(new Date(values.certificateDate).getTime());
      if (!isValidDate) errors.certificateDate = "Invalid certificate date";
    }

    // 3. Image Validation (if image is selected)
    if (values.image && values.image instanceof File) {
      const allowedFileTypes = ["png", "jpg", "jpeg"];
      const fileExtension = values.image.name.split(".").pop().toLowerCase();
      const maxSize = 5 * 1024 * 1024; // 5 MB limit

      if (!allowedFileTypes.includes(fileExtension)) {
        errors.certificatePhoto = `Invalid file type. Only ${allowedFileTypes.join(
          ", "
        )} are allowed.`;
      }

      if (values.image.size > maxSize) {
        errors.certificatePhoto =
          "File size exceeds 5 MB. Please upload a smaller file.";
      }
    }

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
      certificatePhoto: null, // To hold file input
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        let imgUrl = values.certificatePhoto;
        if (values.image instanceof File) {
          const data = new FormData();
          data.append("file", values.image);
          data.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
          data.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${
              import.meta.env.VITE_CLOUD_NAME
            }/image/upload`,
            data
          );

          if (response.data && response.data.url) {
            imgUrl = response.data.url;
          }
        }

        // Update certificate details
        const updateResponse = await axiosInstanceAdmin.put(
          `/editcertificate/${id}`,
          {
            certificateId: values.certificateId,
            certificateName: values.certificateName,
            studentName: values.studentName,
            courseName: values.courseName,
            certificateDate: values.certificateDate,
            certificatePhoto: imgUrl,
          }
        );

        if (updateResponse.data) {
          toast.success("Certificate updated successfully!");
          navigate("/getallcertificates");
        }
      } catch (error) {
        toast.error(
          error.response?.formData?.error ||
            "Failed to update certificate. Try again."
        );
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    axiosInstanceAdmin
      .get(`/getallcertificate1/${id}`)
      .then((response) => {
        if (response.data && response.data.certificatesDetails) {
          const {
            certificateId,
            certificateName,
            studentName,
            courseName,
            certificateDate,
            certificatePhoto,
          } = response.data.certificatesDetails;

          // Format the date correctly
          const formattedDate = certificateDate
            ? new Date(certificateDate).toISOString().split("T")[0]
            : "";

          formik.setValues({
            certificateId: certificateId || "",
            certificateName: certificateName || "",
            studentName: studentName || "",
            courseName: courseName || "",
            certificateDate: formattedDate, // Set formatted date
            certificatePhoto: certificatePhoto || null, // Set the image URL
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching certificate:", error);
        toast.error("Failed to load certificate data.");
      });
  }, [id]);

  return (
    <>
<AdminNavbar/>
<div className="bg-gradient-to-b from-gray-200 to-white p-4 rounded-lg min-h-screen">
      <form onSubmit={formik.handleSubmit} className="p-8 space-y-8">
        <div className="text-3xl font-semibold mb-8 text-center">
          Edit Certificate
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-md w-full mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
              {/* 1 Certificate ID */}
              <div className="mb-4">
                <label
                  htmlFor="certificateId"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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

              {formik.touched.certificateId && formik.errors.certificateId && (
                <div className="text-red-500 text-sm">
                  {formik.errors.certificateId}
                </div>
              )}

              {/* 2 Certificate Name */}
              <div className="mb-4">
                <label
                  htmlFor="certificateName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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
              {formik.touched.certificateName &&
                formik.errors.certificateName && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.certificateName}
                  </div>
                )}

              {/* 3. Student Name */}
              <div className="mb-4">
                <label
                  htmlFor="studentName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Student Name
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  className="w-full rounded-lg bg-gray-100 border border-gray-300 p-2"
                  value={formik.values.studentName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {formik.touched.studentName && formik.errors.studentName && (
                <div className="text-red-500 text-sm">
                  {formik.errors.studentName}
                </div>
              )}

              {/* 4. Course Name */}
              <div className="mb-4">
                <label
                  htmlFor="courseName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Course Name
                </label>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  className="w-full rounded-lg bg-gray-100 border border-gray-300 p-2"
                  value={formik.values.courseName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {formik.touched.courseName && formik.errors.courseName && (
                <div className="text-red-500 text-sm">
                  {formik.errors.courseName}
                </div>
              )}

              {/* 5 Certificate Date */}
              <div className="mb-4">
                <label
                  htmlFor="certificateDate"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Certificate Date
                </label>
                <input
                  type="date"
                  id="certificateDate"
                  name="certificateDate"
                  className="w-full rounded-lg bg-gray-100 border border-gray-300 p-2"
                  value={formik.values.certificateDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.certificateDate &&
                formik.errors.certificateDate && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.certificateDate}
                  </div>
                )}

              {/* Certificate Photo */}
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Certificate Photo
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border rounded"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const allowedFileTypes = ["png", "jpg", "jpeg"];
                      const fileExtension = file.name
                        .split(".")
                        .pop()
                        .toLowerCase();
                      const maxSize = 5 * 1024 * 1024; // 5 MB limit

                      if (!allowedFileTypes.includes(fileExtension)) {
                        toast.error(
                          `Invalid file type. Only ${allowedFileTypes.join(
                            ", "
                          )} allowed.`
                        );
                        return;
                      }

                      if (file.size > maxSize) {
                        toast.error(
                          "File size exceeds 5 MB. Please upload a smaller file."
                        );
                        return;
                      }

                      formik.setFieldValue("image", file);
                      toast.success("Image selected successfully.");
                    }
                  }}
                  onBlur={formik.handleBlur}
                />

                {/* Image Preview */}
                {(formik.values.image || formik.values.certificatePhoto) && (
                  <img
                    src={
                      formik.values.image instanceof File
                        ? URL.createObjectURL(formik.values.image)
                        : formik.values.certificatePhoto // If it's a URL, display it directly
                    }
                    alt="Certificate Preview"
                    className="mt-2 h-32 w-32 object-cover rounded border"
                  />
                )}
              </div>
              {formik.touched.certificatePhoto &&
                formik.errors.certificatePhoto && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.certificatePhoto}
                  </div>
                )}

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
    </>
 
  );
}

export default EditCertificate;
