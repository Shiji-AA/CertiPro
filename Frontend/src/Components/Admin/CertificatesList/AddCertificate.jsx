import { useState, useEffect } from "react";
import { axiosInstanceAdmin } from "../../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useFormik } from "formik";

function AddCertificate() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCertificates, setSelectedCertificates] = useState([]);

  useEffect(() => {
    axios
      .get("/CourseAndCertificate.json")
      .then((response) => {
        console.log("Fetched Data:", response.data); // Debugging log
        if (response.data && response.data.courses) {
          setCourses(response.data.courses);
          console.log("Courses state updated:", response.data.courses);
        } else {
          console.error("Invalid JSON structure:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const handleCourseChange = (e) => {
    const courseName = e.target.value;
    setSelectedCourse(courseName);

    // Find and set the certificates for the selected course
    const course = courses.find((c) => c.courseName === courseName); // Make sure it's the correct key, `courseName`

    // Ensure certificates are updated based on the selected course
    setCertificates(course ? course.certificateName : []);

    formik.setFieldValue("courseName", courseName);
    formik.setFieldValue("certificateName", ""); // Reset certificate when course changes
  };

  // Validation logic for formik
  const validate = (values) => {
    const errors = {};

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
    } else if (values.certificateName.length < 0) {
      errors.certificateName = "Please add at least 1 Certificate ";
    }

    if (!values.courseDuration) {
      errors.courseDuration = "Please select a course duration";
    }
    // Image validation
    if (values.studentPhoto && values.studentPhoto instanceof File) {
      const allowedFileTypes = ["png", "jpg", "jpeg"];
      const fileExtension = values.studentPhoto.name
        .split(".")
        .pop()
        .toLowerCase();
      const maxSize = 1 * 1024 * 1024;

      if (!allowedFileTypes.includes(fileExtension)) {
        errors.studentPhoto = `Invalid file type. Only ${allowedFileTypes.join(
          ", "
        )} are allowed.`;
      }

      if (values.studentPhoto.size > maxSize) {
        errors.studentPhoto =
          "File size exceeds 1 MB. Please upload a smaller file.";
      }
    }

    return errors;
  };

  const handleCertificateClick = (certificate) => {
    // Toggle the certificate selection
    setSelectedCertificates((prevSelected) => {
      const newSelection = prevSelected.includes(certificate)
        ? prevSelected.filter((item) => item !== certificate) // Remove if already selected
        : [...prevSelected, certificate]; // Add if not selected

      // Update Formik's field value for certificates
      formik.setFieldValue("certificateName", newSelection); // Update Formik field with new selection
      return newSelection;
    });
  };

  // Formik setup
  const formik = useFormik({
    initialValues: {
      admissionNo: "",
      studentName: "",
      courseName: "",
      courseDuration: "",
      certificateName: "",
      studentPhoto: null,
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        let imgUrl = null;

        // If there's an image, upload it to Cloudinary
        if (values.studentPhoto && values.studentPhoto instanceof File) {
          const formData = new FormData();
          formData.append("file", values.studentPhoto);
          formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
          formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${
              import.meta.env.VITE_CLOUD_NAME
            }/image/upload`,
            formData
          );

          if (response.data && response.data.url) {
            imgUrl = response.data.url;
          }
        }

        // Send the form data to the backend
        const addResponse = await axiosInstanceAdmin.post(`/addcertificate`, {
          admissionNo: values.admissionNo,
          certificateName: values.certificateName,
          studentName: values.studentName,
          courseName: values.courseName,
          courseDuration: values.courseDuration,
          studentPhoto: imgUrl || values.studentPhoto, // Use imgUrl if an image was uploaded
        });

        if (addResponse.data) {
          toast.success("Admission No added successfully!");
          navigate("/getallcertificates");
        }
      } catch (error) {
        toast.error(
          error.response?.data?.error ||
            "Failed to update Admission No. Try again."
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
      formik.setFieldValue("studentPhoto", file); // Set the file in Formik's state
      const previewUrl = URL.createObjectURL(file);
      formik.setFieldValue("imagePreview", previewUrl); // Update preview URL in Formik's state
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="bg-gradient-to-b from-teal-300 to-white p-4 rounded-lg">
        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <h2 className="text-2xl font-bold px-6 py-4 bg-tealDark text-teal-800 rounded-t-lg">
            Add Admission Details
          </h2>
          <form onSubmit={formik.handleSubmit} className="p-6">
            {/* Admission No */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Admission No
              </label>
              <input
                type="text"
                name="admissionNo"
                value={formik.values.admissionNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter admission No"
                className="mt-1 p-2 w-full border border-tealLight rounded-md focus:ring-tealDark focus:border-tealDark"
              />
              {formik.touched.admissionNo && formik.errors.admissionNo && (
                <div className="text-red-500 text-sm">
                  {formik.errors.admissionNo}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Student Name
              </label>
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
                <div className="text-red-500 text-sm">
                  {formik.errors.studentName}
                </div>
              )}
            </div>

            {/* Upload Certificate Photo */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Upload Student Photo
              </label>
              <input
                type="file"
                name="studentPhoto"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 p-2 w-full border border-tealLight rounded-md focus:ring-tealDark focus:border-tealDark"
              />
              {formik.touched.studentPhoto && formik.errors.studentPhoto && (
                <div className="text-red-500 text-sm">
                  {formik.errors.studentPhoto}
                </div>
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

            {/* Course Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Course Name
              </label>
              <select
                name="courseName"
                value={formik.values.courseName}
                onChange={handleCourseChange}
                className="mt-1 p-2 w-full border rounded-md"
              >
                <option value="" disabled>
                  Select Course
                </option>
                {courses.length > 0 ? (
                  courses.map((course, index) => (
                    <option key={index} value={course.courseName}>
                      {console.log("Rendering Course:", course.courseName)}
                      {course.courseName}
                    </option>
                  ))
                ) : (
                  <option disabled>Loading courses...</option>
                )}
              </select>
              {formik.touched.courseName && formik.errors.courseName && (
                <div className="text-red-500 text-sm">
                  {formik.errors.courseName}
                </div>
              )}
            </div>

            {/* CourseDuration */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Course Duration
              </label>
              <select
                name="courseDuration"
                value={formik.values.courseDuration}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 p-2 w-full border border-tealLight rounded-md focus:ring-tealDark focus:border-tealDark"
              >
                <option value="" disabled>
                  Select Duration
                </option>
                <option value="1 month">1 Month</option>
                <option value="2 months">2 Months</option>
                <option value="3 months">3 Months</option>
                <option value="4 months">4 Months</option>
                <option value="6 months">6 Months</option>
                <option value="1 year">1 Year</option>
              </select>
              {formik.touched.courseDuration &&
                formik.errors.courseDuration && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.courseDuration}
                  </div>
                )}
            </div>

            {/* Certificate Name */}
            {/* Display and select certificates */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Select Certificates
              </label>
              <div className="grid grid-cols-4 gap-4">
                {certificates.map((certificate, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleCertificateClick(certificate)}
                    className={`p-2 rounded-md text-white ${
                      selectedCertificates.includes(certificate)
                        ? "bg-teal-700"
                        : "bg-teal-500"
                    }`}
                  >
                    {certificate}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-teal-500 text-white w-full py-2 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-tealLight"
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
