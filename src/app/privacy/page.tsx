import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Privacy Policy
          </h1>
          
          <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect the following types of information to provide and improve our services:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Personal information (email address when you contact support)</li>
                <li>Usage data (exercise completion, app interactions)</li>
                <li>Device information (device type, operating system)</li>
                <li>Progress tracking data (exercise history, pain levels)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the collected information for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Providing and maintaining the app</li>
                <li>Improving our services</li>
                <li>Communicating with you</li>
                <li>Analyzing usage patterns</li>
                <li>Personalizing your experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Your data is encrypted during transmission and storage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Sharing</h2>
              <p className="text-gray-600">
                We do not sell, trade, or rent your personal information to third parties. We may share anonymous, aggregated data for analytical purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Changes to Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:helpneckcare@gmail.com" className="text-blue-600 hover:underline">
                  helpneckcare@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 