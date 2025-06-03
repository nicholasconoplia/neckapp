import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Terms & Conditions
          </h1>
          
          <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By downloading, installing, or using the NeckCare app, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use the app.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Use of the App</h2>
              <p className="text-gray-600 mb-4">
                The NeckCare app is designed to provide general exercise guidance and information for neck pain management. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Use the app responsibly and in accordance with these terms</li>
                <li>Not modify, distribute, or reverse engineer the app</li>
                <li>Not use the app for any unlawful purpose</li>
                <li>Maintain the confidentiality of your account information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Medical Disclaimer</h2>
              <p className="text-gray-600">
                The content provided in the app is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Privacy</h2>
              <p className="text-gray-600">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600">
                All content, features, and functionality of the NeckCare app are owned by NeckCare and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. We will notify users of any material changes through the app or via email.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms & Conditions, please contact us at{' '}
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