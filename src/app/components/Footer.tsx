import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About NeckCare</h3>
            <p className="text-gray-300">
              Evidence-based neck pain management app backed by scientific research and designed for daily use.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/eula" className="text-gray-300 hover:text-white">
                  EULA
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact & Support</h3>
            <p className="text-gray-300 mb-2">
              Need help? Contact our support team at{' '}
              <a href="mailto:helpneckcare@gmail.com" className="text-blue-400 hover:text-blue-300">
                helpneckcare@gmail.com
              </a>
            </p>
            <Link href="/support" className="text-blue-400 hover:text-blue-300">
              Visit Support Center
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} NeckCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 