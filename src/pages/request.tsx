<div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
  <h2 className="text-cyanMain text-2xl font-bold">Request Rights</h2>
  <p className="text-gray-700">
    By submitting this request, you agree to the following:
  </p>
  <div className="bg-gray-50 p-4 rounded-lg text-gray-800">
    {`I request rights for the TikTok video: ${contentUrl}. All contracts and revenue splits will follow CyanSync terms.`}
  </div>
  <Button
    onClick={submitRequest}
    className="mt-4 bg-cyanMain text-white font-semibold py-3 rounded-lg hover:bg-cyan-600 transition"
  >
    Submit Request
  </Button>
</div>
