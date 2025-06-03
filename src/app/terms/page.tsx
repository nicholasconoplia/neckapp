import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8"><strong>Effective Date</strong>: June 3, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By downloading, installing, or using NeckCare Pro, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you must not use the app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Subscription Terms</h2>
            <p className="text-gray-700 mb-4">Our subscription service includes:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Free 7-day trial for new subscribers</li>
              <li>Monthly subscription: $9.99 USD per month</li>
              <li>Annual subscription: $79.99 USD per year (save 33%)</li>
              <li>Payment will be charged to your Apple ID account at confirmation of purchase</li>
              <li>Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period</li>
              <li>Account will be charged for renewal within 24-hours prior to the end of the current period</li>
              <li>You can manage and cancel your subscription by going to your Account Settings on the App Store</li>
              <li>Any unused portion of a free trial period will be forfeited when purchasing a subscription</li>
              <li>No refunds for partial subscription periods</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Provide accurate information when using the app</li>
              <li>Use the app in accordance with applicable laws and regulations</li>
              <li>Maintain the security of your account and device</li>
              <li>Not share your account credentials with others</li>
              <li>Not use the app for any illegal or unauthorized purpose</li>
              <li>Not interfere with or disrupt the app's services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Health Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              NeckCare Pro is designed for educational and fitness purposes only. The app:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Is not a substitute for professional medical advice, diagnosis, or treatment</li>
              <li>Should not be used to diagnose or treat any medical condition</li>
              <li>May not be suitable for all users or conditions</li>
              <li>Should be used in conjunction with professional medical advice</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Consult your healthcare provider before starting any exercise program. Stop immediately if you experience pain or discomfort.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content in the app, including but not limited to text, graphics, logos, images, videos, and software, is protected by copyright and other intellectual property rights owned by or licensed to NeckCare Pro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Privacy and Data</h2>
            <p className="text-gray-700 mb-4">
              Your use of NeckCare Pro is also governed by our{' '}
              <a href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>, which describes how we collect, use, and protect your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, NeckCare Pro and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Modifications to Service</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:helpneckcare@gmail.com" className="text-blue-600 hover:text-blue-800">
                helpneckcare@gmail.com
              </a>
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-700">
              By using NeckCare Pro, you acknowledge that you have read and understand these Terms of Service and agree to be bound by them.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: June 3, 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 