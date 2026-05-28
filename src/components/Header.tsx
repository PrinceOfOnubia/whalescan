"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, Wallet, X, Zap } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Wallet Feed", href: "#feed" },
    { label: "Intelligence", href: "#features" },
    { label: "Clusters", href: "#community" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-violet-400/15 bg-[#03040a]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/30 bg-gradient-to-br from-violet-500/30 to-emerald-300/20 text-emerald-200 shadow-[0_0_28px_rgba(153,69,255,0.25)]">
            <Zap size={18} />
          </span>
          <span className="bg-gradient-to-r from-white via-violet-100 to-emerald-200 bg-clip-text text-xl font-semibold tracking-normal text-transparent">
            SolScan AI
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-lg border border-cyan-300/15 bg-white/[0.035] px-3 py-2 text-sm text-slate-300 shadow-[0_0_22px_rgba(45,212,191,0.08)] sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(20,241,149,0.85)]" />
            SOL $168.42
          </div>

          <button
            type="button"
            aria-label="Search wallets"
            className="grid h-10 w-10 place-items-center rounded-lg border border-violet-300/15 bg-white/[0.035] text-slate-300 transition-colors hover:border-cyan-300/30 hover:text-white"
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 via-fuchsia-500 to-emerald-300 px-4 py-2 text-sm font-semibold text-[#04060a] shadow-[0_0_24px_rgba(20,241,149,0.22)] transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <Wallet size={16} />
            Connect
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-violet-300/15 bg-white/[0.035] text-slate-300 transition-colors hover:border-cyan-300/30 hover:text-white md:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-violet-400/15 bg-[#03040a] px-4 py-4 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-300 transition-colors hover:bg-violet-400/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between rounded-lg border border-cyan-300/15 bg-white/[0.035] px-3 py-2 text-sm text-slate-300">
              <span>SOL Price</span>
              <span className="font-semibold text-white">$168.42</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
