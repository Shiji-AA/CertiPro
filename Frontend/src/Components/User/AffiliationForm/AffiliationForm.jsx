function AffiliationForm() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-6 bg-gray-50 border border-gray-200 rounded-md shadow-md">
        <h2 className="text-start text-2xl font-semibold mb-6">
          PERSONAL INFORMATION
        </h2>
        <form>
          {/* First Row */}
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex-1 md:mr-4 mb-4 md:mb-0">
              <label className="block font-medium text-gray-700">
                Name of Applicant<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-700">
                Designation<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex-1 md:mr-4 mb-4 md:mb-0">
              <label className="block font-medium text-gray-700">
                House Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-700">
                Street<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex-1 md:mr-4 mb-4 md:mb-0">
              <label className="block font-medium text-gray-700">
                House Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-700">
                Street<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Fourth Row */}
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex-1 md:mr-4 mb-4 md:mb-0">
              <label className="block font-medium text-gray-700">
                House Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-700">
                Street<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Fifth Row */}
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex-1 md:mr-4 mb-4 md:mb-0">
              <label className="block font-medium text-gray-900">
                Upload Applicant ID Proof (jpg, jpeg, png only)
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  required
                  className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="block font-medium text-gray-700">
                Street<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </form>
      </div>

      {/* OFFICIAL INFORMATION */}

      <div className="max-w-6xl mx-auto p-6 bg-gray-50 border border-gray-200 rounded-md shadow-md mt-10">
        <h2 className="text-start text-2xl font-semibold mb-6">
          OFFICIAL INFORMATION
        </h2>
        <form>
          {/* First Row */}
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex-1 md:mr-4 mb-4 md:mb-0">
              <label className="block font-medium text-gray-700">
                Name of Applicant<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-700">
                Designation<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex-1 md:mr-4 mb-4 md:mb-0">
              <label className="block font-medium text-gray-700">
                House Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-700">
                Street<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex-1 md:mr-4 mb-4 md:mb-0">
              <label className="block font-medium text-gray-700">
                House Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-700">
                Street<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Fourth Row */}
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex-1 md:mr-4 mb-4 md:mb-0">
              <label className="block font-medium text-gray-700">
                House Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium text-gray-700">
                Street<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Fifth Row */}
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex-1 md:mr-4 mb-4 md:mb-0">
              <label className="block font-medium text-gray-900">
                Upload Applicant ID Proof (jpg, jpeg, png only)
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  required
                  className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="block font-medium text-gray-700">
                Street<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="flex items-center mb-4 ml-10 mt-5">
        <input type="checkbox" id="terms" className="mr-2" />
        <label htmlFor="terms" className="text-sm text-gray-700">
          By submitting this form, you hereby agree to accept our{" "}
          <a href="/terms" className="text-blue-500 underline">
            Terms and Conditions
          </a>
        </label>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-14 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default AffiliationForm;
