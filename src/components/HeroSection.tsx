"use client";

import { useState } from "react";

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex flex-col items-center text-center py-12 px-4">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-4xl">
        Track Wallets, <br />
        Token flows{" "}
        <span className="text-blue-400 animate-pulse">
          and NFTS
        </span>
      </h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-2xl mb-8">
        <div className="relative flex items-center bg-gray-800/50 border border-gray-600 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Enter wallet address"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-gray-400 px-4 py-3 outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 p-3 transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
