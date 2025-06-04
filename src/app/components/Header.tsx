import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              NeckCare Pro
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/terms"
              className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/support"
              className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Support
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 