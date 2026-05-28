import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-violet-400/15 bg-[#03040a] py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-cyan-300/30 bg-gradient-to-br from-violet-500/30 to-emerald-300/20 text-emerald-200">
            <Zap size={16} />
          </span>
          <div>
            <p className="font-semibold text-white">SolScan AI</p>
            <p>Solana wallet, token, and bundle intelligence.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <span>© 2026 SolScan AI.</span>
          <Link href="#features" className="transition-colors hover:text-white">
            Intelligence
          </Link>
          <Link href="#feed" className="transition-colors hover:text-white">
            Live Feed
          </Link>
          <Link href="#faq" className="transition-colors hover:text-white">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}
