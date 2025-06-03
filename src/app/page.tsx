import { BeakerIcon, BookOpenIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Take Control of Your</span>
                <span className="block text-blue-600">Neck Pain Today</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Evidence-based exercises and guidance to help you manage and reduce neck pain, backed by scientific research and designed for daily use.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Download Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Our App?</h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Comprehensive neck pain management backed by scientific research
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <BookOpenIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Research-Based Approach</h3>
                      <p className="mt-5 text-base text-gray-500">
                        All exercises and recommendations are based on scientific research and PubMed sources
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <ChartBarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Progress Tracking</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Monitor your improvement and track your daily exercises
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <BeakerIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Customized Experience</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Personalized exercise recommendations based on your specific needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Important Information</h3>
              <p className="text-blue-700">
                This app provides general exercise guidance and information based on scientific research. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
