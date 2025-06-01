export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Support Center
        </h1>
        
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h2>
          <p className="text-gray-600 mb-4">
            We&apos;re here to help! For any questions, concerns, or technical support, please reach out to our dedicated support team:
          </p>
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="text-blue-700">
              Email: <a href="mailto:canvohelp@gmail.com" className="font-medium hover:underline">canvohelp@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Common Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">How do I reset my progress?</h3>
              <p className="mt-2 text-gray-600">
                You can reset your progress in the app settings under &ldquo;User Data&rdquo;.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Is my data secure?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we take data security seriously. All your personal information and progress data is stored securely and never shared with third parties.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">How often should I do the exercises?</h3>
              <p className="mt-2 text-gray-600">
                Follow the recommended frequency in the app for each exercise. If you experience any pain or discomfort, please consult with your healthcare provider.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Important Notice</h2>
          <p className="text-gray-600">
            This app provides general exercise guidance based on scientific research. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
        </div>
      </div>
    </div>
  )
} 