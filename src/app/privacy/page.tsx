import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy for NeckCare Pro</h1>
        <p className="text-gray-600 mb-8"><strong>Effective Date</strong>: June 3, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Health and Fitness Data</strong>: Pain levels, symptoms, exercise progress, and assessment responses</li>
            <li><strong>Usage Data</strong>: App usage patterns, exercise completion rates, and feature interactions</li>
            <li><strong>Device Information</strong>: Device type, operating system version, and app version</li>
            <li><strong>Contact Information</strong>: Email address (when you contact support)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Analytics Data</strong>: App performance, crash reports, and usage statistics</li>
            <li><strong>Subscription Information</strong>: Subscription status and transaction history (processed by Apple)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use collected information to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Provide personalized exercise recommendations</li>
            <li>Track your progress and pain levels over time</li>
            <li>Improve app functionality and user experience</li>
            <li>Ensure proper subscription management</li>
            <li>Provide customer support</li>
            <li>Send important updates about the app</li>
            <li>Analyze usage patterns to improve features</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Local Storage</strong>: Health data is primarily stored locally on your device</li>
            <li><strong>Security Measures</strong>: We implement industry-standard security measures to protect your data</li>
            <li><strong>No Third-Party Sharing</strong>: We do not sell or share your personal health data with third parties</li>
            <li><strong>Data Encryption</strong>: All data is encrypted during transmission and storage</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Access your personal data</li>
            <li>Request deletion of your data</li>
            <li>Modify or correct your information</li>
            <li>Opt-out of data collection (may limit app functionality)</li>
            <li>Request a copy of your data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Subscription Data</h2>
          <p className="text-gray-700 mb-4">
            For users with subscriptions, we process the following additional information:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Subscription status and type</li>
            <li>Purchase dates and renewal information</li>
            <li>Transaction history (processed securely through Apple)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Health Data Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            NeckCare Pro is designed for educational and fitness purposes only. The app is not intended to diagnose, treat, cure, or prevent any medical condition. Always consult with healthcare professionals for medical advice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy periodically. Users will be notified of significant changes through the app or email. Continued use of the app after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="text-gray-700 mb-4">For questions about this Privacy Policy, contact us at:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Email: helpneckcare@gmail.com</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Apple App Store Compliance</h2>
          <p className="text-gray-700 mb-4">
            This app complies with Apple's App Store Review Guidelines and Data Use policies. Subscription management and payments are handled through Apple's secure payment system.
          </p>
        </section>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-700">
            By using NeckCare Pro, you agree to this Privacy Policy and our{' '}
            <a href="/terms" className="text-blue-600 hover:text-blue-800">Terms of Service</a>.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: June 3, 2025
          </p>
        </div>
      </div>
    </div>
  );
} 