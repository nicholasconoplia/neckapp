import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function EULAPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">End User License Agreement (EULA)</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. License Grant</h2>
            <p className="text-gray-700 mb-4">
              NeckCare grants you a limited, non-exclusive, non-transferable license to download, install, and use the app for your personal, non-commercial use on devices associated with your Apple ID.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Restrictions</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Modify, reverse engineer, or decompile the app</li>
              <li>Remove any copyright or proprietary notices</li>
              <li>Use the app for any illegal purpose</li>
              <li>Transfer the license to any third party</li>
              <li>Create derivative works based on the app</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Subscription Terms</h2>
            <p className="text-gray-700 mb-4">Premium features require a subscription:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Free 7-day trial available for new subscribers</li>
              <li>Monthly and annual subscription options available</li>
              <li>Payment will be charged to your Apple ID account at confirmation of purchase</li>
              <li>Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period</li>
              <li>Account will be charged for renewal within 24-hours prior to the end of the current period</li>
              <li>You can manage and cancel subscriptions by going to your Account Settings on the App Store</li>
              <li>Any unused portion of a free trial period will be forfeited when purchasing a subscription</li>
              <li>No refund for unused portion upon cancellation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Medical Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The app provides general exercise guidance and is not a substitute for professional medical advice. Always consult healthcare professionals before starting any exercise program. Use the app at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data</h2>
            <p className="text-gray-700 mb-4">
              Your use of the app is also governed by our <a href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>. We collect and process data as described in the Privacy Policy to provide and improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to the app immediately for violations of this agreement. Upon termination, all rights granted to you under this EULA will cease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranty</h2>
            <p className="text-gray-700 mb-4 uppercase">
              The app is provided "as is" without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Apple App Store Terms</h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>This agreement is between you and NeckCare, not Apple</li>
              <li>Apple has no responsibility for the app or its content</li>
              <li>Apple is a third-party beneficiary of this agreement</li>
              <li>Apple is not responsible for maintenance or support services</li>
              <li>Apple is not responsible for any warranty claims or product liability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
            <p className="text-gray-700 mb-4">
              For questions about this EULA, please contact us at:{' '}
              <a href="mailto:helpneckcare@gmail.com" className="text-blue-600 hover:text-blue-800">
                helpneckcare@gmail.com
              </a>
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: June 3, 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 