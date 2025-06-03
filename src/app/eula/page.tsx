import Header from '../components/Header'
import Footer from '../components/Footer'

export default function EULA() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            End User License Agreement (EULA)
          </h1>
          
          <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. License Grant</h2>
              <p className="text-gray-600">
                NeckCare grants you a limited, non-exclusive, non-transferable license to download, install, and use the app for your personal, non-commercial use on a single mobile device.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Restrictions</h2>
              <p className="text-gray-600 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Modify, reverse engineer, or decompile the app</li>
                <li>Remove any copyright or proprietary notices</li>
                <li>Use the app for any illegal purpose</li>
                <li>Transfer the license to any third party</li>
                <li>Create derivative works based on the app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Subscription Terms</h2>
              <p className="text-gray-600 mb-4">
                Some features of the app may require a subscription:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Payment will be charged at confirmation of purchase</li>
                <li>Subscriptions can be managed in your device&apos;s account settings</li>
                <li>No refund for unused portion upon cancellation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Medical Disclaimer</h2>
              <p className="text-gray-600">
                The app provides general exercise guidance and is not a substitute for professional medical advice. Always consult healthcare professionals before starting any exercise program. Use the app at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Privacy and Data</h2>
              <p className="text-gray-600">
                Your use of the app is also governed by our Privacy Policy. We collect and process data as described in the Privacy Policy to provide and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Termination</h2>
              <p className="text-gray-600">
                We may terminate or suspend your access to the app immediately for violations of this agreement. Upon termination, all rights granted to you under this EULA will cease.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Disclaimer of Warranty</h2>
              <p className="text-gray-600">
                The app is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Contact</h2>
              <p className="text-gray-600">
                For questions about this EULA, please contact us at{' '}
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