export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Privacy Policy
        </h1>
        
        <div className="bg-white shadow rounded-lg p-6 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600">
              Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our NeckPain mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                We collect information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Create an account</li>
                <li>Use the app's features</li>
                <li>Contact us for support</li>
                <li>Track your exercise progress</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 text-gray-600 mt-2">
              <li>Provide and maintain our Service</li>
              <li>Track your progress and customize your experience</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Improve our app and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:canvohelp@gmail.com" className="text-blue-600 hover:underline">
                canvohelp@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 