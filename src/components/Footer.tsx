import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#131414] border-t border-gray-700 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-sm text-gray-400">
          <span>© 2025 Seiscan. All rights reserved.</span>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <span>|</span>
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
