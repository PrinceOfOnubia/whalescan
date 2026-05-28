"use client";

import { useState } from "react";
import { ArrowRight, BellRing, Boxes, Radar, Search, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_12%,rgba(153,69,255,0.34),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(20,241,149,0.22),transparent_28%),radial-gradient(circle_at_52%_92%,rgba(45,212,191,0.14),transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(45,212,191,0.12)]">
            <Radar size={16} />
            Solana-native intelligence dashboard
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            Wallet. Token. Bundle. Intelligence.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Real-time Solana tracking for smart money, memecoins, whale
            wallets, and coordinated activity.
          </p>

          <div className="mt-8 max-w-2xl rounded-lg border border-violet-300/20 bg-[#070812]/80 p-2 shadow-[0_0_44px_rgba(153,69,255,0.18)] backdrop-blur">
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-200/60"
                />
                <input
                  type="text"
                  placeholder="Search wallet, CA, ticker"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="h-12 w-full rounded-md border border-white/10 bg-[#050712] pl-11 pr-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-emerald-300/70"
                />
              </div>
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-500 via-fuchsia-500 to-emerald-300 px-5 text-sm font-semibold text-[#04060a] shadow-[0_0_26px_rgba(20,241,149,0.24)] transition-opacity hover:opacity-90"
              >
                Scan Flow
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ["2.4k", "tracked whale wallets"],
              ["18s", "mock signal latency"],
              ["71", "wallet clusters mapped"]
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-violet-300/15 bg-white/[0.035] p-4 shadow-[0_0_28px_rgba(153,69,255,0.08)]"
              >
                <div className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-2xl font-bold text-transparent">
                  {value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-violet-300/20 bg-[#070812]/85 p-4 shadow-[0_0_54px_rgba(153,69,255,0.2)] backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Bundle monitor</p>
              <h2 className="text-xl font-semibold text-white">Coordinated flow</h2>
            </div>
            <span className="rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200 shadow-[0_0_18px_rgba(20,241,149,0.18)]">
              LIVE
            </span>
          </div>

          <div className="space-y-3">
            {[
              {
                icon: BellRing,
                title: "Smart money bought $WIF",
                detail: "7.8 SOL · token CA tracked · 22s ago"
              },
              {
                icon: ShieldCheck,
                title: "Whale wallet rotated into $POPCAT",
                detail: "15.4 SOL · cluster score 86 · 48s ago"
              },
              {
                icon: Boxes,
                title: "Bundle activity detected on $BONK",
                detail: "3.2 SOL · 4 linked wallets · 1m ago"
              }
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-violet-500/25 to-cyan-300/10 text-violet-100">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-500 via-cyan-300 to-emerald-300"
              aria-hidden="true"
            />
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Mock data for frontend preview. RPC and indexer integrations are not
            connected yet.
          </p>
        </div>
      </div>
    </section>
  );
}
