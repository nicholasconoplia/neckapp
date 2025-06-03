import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              NeckCare
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/terms"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Privacy
            </Link>
            <Link
              href="/support"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Support
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 