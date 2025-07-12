"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-[#131414] border-b border-gray-700">
      {/* Logo and Price */}
      <div className="flex items-center gap-6">
        <Link href="/" className="text-2xl font-semibold text-white">
          Seiscan
        </Link>
        <div className="hidden sm:flex items-center bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-2">
          <span className="text-lg font-medium text-white">$0.32</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/trades" className="text-gray-300 hover:text-white transition-colors">
          Trades
        </Link>
        <Link href="/tokens" className="text-gray-300 hover:text-white transition-colors">
          Tokens
        </Link>
        <Link href="/leaderboard" className="text-gray-300 hover:text-white transition-colors">
          Leaderboard
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Search Icon */}
        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>

        {/* Connect Wallet */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          Connect Wallet
        </button>

        {/* Settings/Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"></circle>
            <circle cx="19" cy="4" r="2"></circle>
            <circle cx="5" cy="20" r="2"></circle>
            <circle cx="19" cy="20" r="2"></circle>
            <circle cx="5" cy="4" r="2"></circle>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#131414] border-b border-gray-700 md:hidden">
          <div className="flex flex-col p-4 gap-4">
            <Link href="/trades" className="text-gray-300 hover:text-white transition-colors">
              Trades
            </Link>
            <Link href="/tokens" className="text-gray-300 hover:text-white transition-colors">
              Tokens
            </Link>
            <Link href="/leaderboard" className="text-gray-300 hover:text-white transition-colors">
              Leaderboard
            </Link>
            <hr className="border-gray-700" />
            <div className="flex items-center justify-between">
              <span className="text-white">SEI Price:</span>
              <span className="text-lg font-medium text-white">$0.32</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
