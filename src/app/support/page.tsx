import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-8">Support Center</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Need help? We're here to assist you. Contact our support team at:{' '}
            <a href="mailto:helpneckcare@gmail.com" className="text-blue-600 hover:text-blue-800">
              helpneckcare@gmail.com
            </a>
          </p>
          <p className="text-gray-700">
            We typically respond within 24 hours during business days.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Subscription & Billing</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">How do I manage my subscription?</h4>
                  <p className="text-gray-700">
                    You can manage your subscription through your Apple ID settings:
                  </p>
                  <ol className="list-decimal pl-6 mt-2 text-gray-700">
                    <li>Open the Settings app on your iOS device</li>
                    <li>Tap your name at the top</li>
                    <li>Tap "Subscriptions"</li>
                    <li>Find NeckCare Pro in the list and tap it</li>
                    <li>Here you can cancel or change your subscription</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">What are the subscription options?</h4>
                  <p className="text-gray-700">
                    We offer:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li>Monthly subscription: $9.99 USD</li>
                    <li>Annual subscription: $79.99 USD (save 33%)</li>
                    <li>7-day free trial for new subscribers</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">How do refunds work?</h4>
                  <p className="text-gray-700">
                    Refund requests are handled by Apple. To request a refund, visit{' '}
                    <a href="https://reportaproblem.apple.com" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                      reportaproblem.apple.com
                    </a>
                    {' '}and sign in with your Apple ID.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">App Usage</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">How do I track my progress?</h4>
                  <p className="text-gray-700">
                    Your progress is automatically tracked in the "Progress" tab. You'll see:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li>Daily exercise completion</li>
                    <li>Pain level trends</li>
                    <li>Exercise history</li>
                    <li>Achievement milestones</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Can I customize my exercise routine?</h4>
                  <p className="text-gray-700">
                    Yes! You can customize your routine in the "Settings" section:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li>Choose exercise difficulty</li>
                    <li>Set preferred exercise duration</li>
                    <li>Select focus areas</li>
                    <li>Set reminder times</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">How do I update the app?</h4>
                  <p className="text-gray-700">
                    The app updates automatically through the App Store. To manually check for updates:
                  </p>
                  <ol className="list-decimal pl-6 mt-2 text-gray-700">
                    <li>Open the App Store</li>
                    <li>Tap your profile picture</li>
                    <li>Pull down to refresh</li>
                    <li>If an update is available, tap "Update" next to NeckCare Pro</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">What devices are supported?</h4>
                  <p className="text-gray-700">
                    NeckCare Pro supports:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li>iPhone running iOS 15.0 or later</li>
                    <li>iPad running iPadOS 15.0 or later</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Safety Guidelines</h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-gray-700 mb-4">
              Always follow these safety guidelines when using the app:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Consult your healthcare provider before starting any exercise program</li>
              <li>Stop immediately if you experience pain or discomfort</li>
              <li>Follow the exercise instructions carefully</li>
              <li>Start with easier exercises and gradually increase difficulty</li>
              <li>Take breaks when needed</li>
              <li>Stay hydrated</li>
            </ul>
          </div>
        </section>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-700">
            Still need help? Check our{' '}
            <a href="/terms" className="text-blue-600 hover:text-blue-800">Terms of Service</a>
            {' '}and{' '}
            <a href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
            {' '}or contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
} 