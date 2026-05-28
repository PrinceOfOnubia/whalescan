import { Bell, BrainCircuit, Coins, Crosshair, Users, WalletCards } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: WalletCards,
      title: "Wallet intelligence",
      description:
        "Track whale wallets, fresh wallets, and profitable Solana memecoin traders by cluster instead of raw transaction pages."
    },
    {
      icon: Coins,
      title: "SPL token and CA tracking",
      description:
        "See buys, sells, transfers, token CAs, SOL sizing, and estimated USD value across the SPL tokens your watchlist cares about."
    },
    {
      icon: BrainCircuit,
      title: "Smart money labels",
      description:
        "Group wallets by behavior so repeat winners, rotators, and KOL-linked wallets stand out immediately."
    },
    {
      icon: Bell,
      title: "Bundle activity alerts",
      description:
        "Preview coordinated entries, bundled wallet activity, whale rotations, and fresh wallet accumulation."
    },
    {
      icon: Crosshair,
      title: "Memecoin focus",
      description:
        "Built around Solana trading workflows, not generic validator, block, or protocol analytics."
    },
    {
      icon: Users,
      title: "KOL-linked tracking",
      description:
        "Monitor known public clusters and influencer-adjacent wallets as social momentum hits the tape."
    }
  ];

  return (
    <section id="features" className="px-4 pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
            Solana intelligence layer
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Designed for wallet, token, and bundle decisions
          </h2>
          <p className="mt-3 text-slate-400">
            SolScan AI focuses the interface on the activity traders actually
            scan: wallet clusters, token CAs, SPL tokens, SOL-denominated
            movement, and bundle signal quality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-lg border border-violet-300/15 bg-white/[0.035] p-6 shadow-[0_0_28px_rgba(153,69,255,0.08)] transition-colors hover:border-emerald-300/35 hover:bg-white/[0.055]"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-violet-500/25 to-cyan-300/10 text-violet-100">
                  <Icon size={21} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
