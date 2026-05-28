import { MessageCircle, Radio, Users } from "lucide-react";

export default function SocialSection() {
  return (
    <section id="community" className="px-4 pb-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-violet-300/20 bg-[#070812]/90 p-6 shadow-[0_0_42px_rgba(153,69,255,0.12)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Wallet clusters
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Built for Solana desks that move fast
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            Follow tracked wallet clusters, compare smart money signals, and
            keep a clean map of wallets that consistently find memecoin momentum
            before it becomes obvious.
          </p>
          <a
            href="https://x.com/solana"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 via-fuchsia-500 to-emerald-300 px-4 py-2 text-sm font-semibold text-[#04060a] shadow-[0_0_24px_rgba(20,241,149,0.2)] transition-opacity hover:opacity-90"
          >
            <MessageCircle size={16} />
            Join the conversation
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Users,
              value: "12k+",
              label: "wallets in tracked clusters"
            },
            {
              icon: Radio,
              value: "24/7",
              label: "Solana activity feed preview"
            },
            {
              icon: MessageCircle,
              value: "CA",
              label: "token CA and bundle monitoring"
            }
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-lg border border-violet-300/15 bg-white/[0.035] p-6 shadow-[0_0_28px_rgba(45,212,191,0.08)]"
              >
                <div className="mb-8 grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-cyan-300/20 to-emerald-300/10 text-cyan-100">
                  <Icon size={18} />
                </div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
