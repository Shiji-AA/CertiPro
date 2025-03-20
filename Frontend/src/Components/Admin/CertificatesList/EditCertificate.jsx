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
  const [courses, setCourses] = useState([]);
  const [certificates, setCertificates] = useState([]);
    const [selectedCertificates, setSelectedCertificates] = useState([]);


  useEffect(() => {
    axios
      .get("/CourseAndCertificate.json")
      .then((response) => {
      if (response.data && response.data.courses) {
      setCourses(response.data.courses);
        } else {
          console.error("Invalid JSON structure:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);
  

  // Validation rules
  const validate = (values) => {
    const errors = {};
    if (!values.admissionNo) {
      errors.admissionNo = "Required";
    } else if (values.admissionNo.length < 1) {
      errors.admissionNo = "admissionNo Must be greater than 1";
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
    } else if (values.certificateName.length < 0) {
      errors.certificateName = "Please Select at least one certificate ";
    }

    if (!values.courseDuration) {
      errors.courseDuration = "Please select a course duration";
    }

  
    if (values.image && values.image instanceof File) {
      const allowedFileTypes = ["png", "jpg", "jpeg"];
      const fileExtension = values.image.name.split(".").pop().toLowerCase();
      const maxSize = 1 * 1024 * 1024; // 5 MB limit

      if (!allowedFileTypes.includes(fileExtension)) {
        errors.studentPhoto = `Invalid file type. Only ${allowedFileTypes.join(
          ", "
        )} are allowed.`;
      }

      if (values.image.size > maxSize) {
        errors.studentPhoto =
          "File size exceeds 1 MB. Please upload a smaller file.";
      }
    }

    return errors;
  };

  // Formik for form handling
  const formik = useFormik({
    initialValues: {
      admissionNo:"",
      certificateId: "",
      certificateName: "",
      studentName: "",
      courseName: "",
      courseDuration: "",
      studentPhoto: null, 
    },
    validate,

    onSubmit: async (values) => {
      setLoading(true);
      console.log("Submitting values:", values); // Debugging log
   
      try {
        let imgUrl = values.studentPhoto;
        if (values.image instanceof File) {
          const data = new FormData();
          data.append("file", values.image);
          data.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
          data.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);
   
          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
            data
          );
   
          if (response.data && response.data.url) {
            imgUrl = response.data.url;
          }
        }
   
        // Filter out unchanged values
        const updatedValues = {}
        Object.keys(values).forEach((key) => {
          if (values[key] !== formik.initialValues[key] && values[key] !== "") {
            updatedValues[key] = values[key];
          }
        });

          // Ensure image is updated correctly
    if (imgUrl !== formik.initialValues.studentPhoto) {
      updatedValues.studentPhoto = imgUrl;
    }
      // If no fields are updated, return early
      if (Object.keys(updatedValues).length === 0) {
        toast.error("No changes detected.");
        setLoading(false);
        return;
      }
   
        const updateResponse = await axiosInstanceAdmin.put(
          `/editcertificate/${id}`,
          updatedValues
        );
   
        if (updateResponse.data) {
          console.log("Updated data:", updateResponse.data);
          toast.success("Admission Details updated successfully!");
          navigate("/getallcertificates");
        }
      } catch (error) {
        console.error("Error updating details:", error);
        toast.error(
          error.response?.data?.error || "Failed to update Admission Details. Try again."
        );
      } finally {
        setLoading(false);
      }
    }
   

  });

  useEffect(() => {
    if (courses.length === 0) {
      console.log("Courses not loaded yet. Waiting before fetching certificates.");
      return;
    }  
    axiosInstanceAdmin.get(`/getallcertificate1/${id}`)
      .then((response) => {      
        const data = response.data.certificatesDetails
  console.log(data,"data")
        if (data) {
          const {
            admissionNo,
            studentName,
            certificateId,
            courseName,
            certificateName,
            courseDuration,
            studentPhoto,
          } = data;
  
          formik.setValues({
            admissionNo: admissionNo ,
            certificateId: certificateId ,
            studentName: studentName ,
            courseName: courseName ,
            certificateName: certificateName|| [],
            courseDuration: courseDuration ,
            studentPhoto: studentPhoto || null,
          });
  
          // Find the selected course in the `courses` state
          const selectedCourse = courses.find(course => course.courseName === courseName);
          
          console.log("Selected Course from State:", selectedCourse); // Debugging log
          if (selectedCourse) {
            setCertificates(selectedCourse.certificateName || []);
          } else {
            console.warn(`No course found with name: ${courseName}`);
            setCertificates([]);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching Admission Details:", error);
        toast.error("Failed to load Admission Details.");
      });
  }, [id, courses]);

  const handleCourseChange = (e) => {
    const selectedCourseName = e.target.value;
    formik.setFieldValue("courseName", selectedCourseName);
  
    const selectedCourse = courses.find((c) => c.courseName === selectedCourseName);
    console.log("Selected Course:", selectedCourse); // Debugging log
    setCertificates(selectedCourse?.certificateName || []);
    formik.setFieldValue("certificateName", []);
  };
  
  const handleCertificateClick = (certificate) => {
    setSelectedCertificates((prevSelected) => {
      const isSelected = prevSelected.includes(certificate);
      let updatedSelection;
  
      if (isSelected) {
        updatedSelection = prevSelected.filter((item) => item !== certificate);
      } else {
        updatedSelection = [...prevSelected, certificate];
      }
  
      formik.setFieldValue("certificateName", updatedSelection);
      return updatedSelection;
    });
  };
  


  return (
    <>
<AdminNavbar/>
<div className="bg-gradient-to-b from-teal-300 to-white p-4 rounded-lg">
  <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
  <h2 className="text-2xl font-bold px-6 py-4 bg-tealDark text-teal-800 rounded-t-lg">
            Edit Admission Details
          </h2>
  <form onSubmit={formik.handleSubmit} className="p-6">
       
        <div className="mb-4">
          <div className=" max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-2">


               {/* 01 Admission no*/}
               <div className="mb-4">
                <label
                  htmlFor="admissionNo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Admission No
                </label>
                <input
                  type="text"
                  id="admissionNo"
                  name="admissionNo"
                  className="w-full rounded-lg bg-gray-100 border border-gray-300 p-2"
                  value={formik.values.admissionNo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
               {formik.touched.admissionNo && formik.errors.admissionNo && (
                <div className="text-red-500 text-sm">
                  {formik.errors.admissionNo}
                </div>
              )} 

                 {/* 2. Student Name */}
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
                      {course.courseName}
                    </option>
                  ))
                ) : (
                  <option disabled>Loading courses...</option>
                )}
              </select>
            
            </div>


              {/* 5 Certificate Date */}
              <div className="mb-4">
                <label
                  htmlFor="courseDuration"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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
              </div>
              {formik.touched.courseDuration &&
                formik.errors.courseDuration && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.courseDuration}
                  </div>
                )}


              {/* 1 Certificate ID */}
              {/* <div className="mb-4">
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
              </div> */}

              {/* {formik.touched.certificateId && formik.errors.certificateId && (
                <div className="text-red-500 text-sm">
                  {formik.errors.certificateId}
                </div>
              )} */}

      {/* Certificate Name */}
        {/* Certificate Name */}
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
          selectedCertificates.includes(certificate) ? "bg-teal-700" : "bg-teal-500"
        }`}
      >
        {certificate}
      </button>
    ))}
  </div>
</div>


           

            

              {/* student Photo */}
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Student Photo
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
                      const maxSize = 1 * 1024 * 1024; // 1 MB limit

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
                          "File size exceeds 51 MB. Please upload a smaller file."
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
                {(formik.values.image || formik.values.studentPhoto) && (
                  <img
                    src={
                      formik.values.image instanceof File
                        ? URL.createObjectURL(formik.values.image)
                        : formik.values.studentPhoto // If it's a URL, display it directly
                    }
                    alt="Certificate Preview"
                    className="mt-2 h-32 w-32 object-cover rounded border"
                  />
                )}
              </div>
              {formik.touched.studentPhoto &&
                formik.errors.studentPhoto && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.studentPhoto}
                  </div>
                )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 text-white bg-teal-500 rounded-md hover:bg-teal-700"
              >
                {loading ? "Updating..." : "Update Admission Details"}
              </button>
            </div>
          </div>
        </div>
      </form>

  </div>
     
    </div>
    </>
 
  );
}

export default EditCertificate;
