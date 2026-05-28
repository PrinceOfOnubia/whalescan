import { ArrowDownLeft, ArrowUpRight, Repeat2 } from "lucide-react";

type ActivityAction = "BUY" | "SELL" | "TRANSFER";
type SignalBadge =
  | "Fresh Wallet"
  | "Whale Wallet"
  | "Smart Money"
  | "Bundle Signal"
  | "KOL Wallet";

interface WalletActivity {
  id: string;
  wallet: string;
  label: string;
  token: string;
  tokenCa: string;
  action: ActivityAction;
  amountSol: string;
  estimatedUsd: string;
  timestamp: string;
  signal: SignalBadge;
}

const mockActivity: WalletActivity[] = [
  {
    id: "1",
    wallet: "7mR4...9Qk2",
    label: "alpha sweeper",
    token: "$WIF",
    tokenCa: "EKpQ...zcjm",
    action: "BUY",
    amountSol: "18.42 SOL",
    estimatedUsd: "$3,101",
    timestamp: "12s ago",
    signal: "Smart Money"
  },
  {
    id: "2",
    wallet: "Hn8p...V2xz",
    label: "new pair hunter",
    token: "$POPCAT",
    tokenCa: "7GCi...pump",
    action: "BUY",
    amountSol: "6.80 SOL",
    estimatedUsd: "$1,145",
    timestamp: "27s ago",
    signal: "Fresh Wallet"
  },
  {
    id: "3",
    wallet: "4KxY...bN91",
    label: "high conviction whale",
    token: "$BONK",
    tokenCa: "DezX...B263",
    action: "TRANSFER",
    amountSol: "42.10 SOL",
    estimatedUsd: "$7,087",
    timestamp: "44s ago",
    signal: "Whale Wallet"
  },
  {
    id: "4",
    wallet: "9sVd...Qp44",
    label: "influencer cluster",
    token: "$MOTHER",
    tokenCa: "3S8q...pump",
    action: "SELL",
    amountSol: "11.05 SOL",
    estimatedUsd: "$1,860",
    timestamp: "1m ago",
    signal: "KOL Wallet"
  },
  {
    id: "5",
    wallet: "2BVa...L7fq",
    label: "early buyer",
    token: "$MEW",
    tokenCa: "MEW1...uoyp",
    action: "BUY",
    amountSol: "25.00 SOL",
    estimatedUsd: "$4,208",
    timestamp: "2m ago",
    signal: "Bundle Signal"
  },
  {
    id: "6",
    wallet: "Fs39...aK6m",
    label: "rotator",
    token: "$BOME",
    tokenCa: "ukHH...pump",
    action: "SELL",
    amountSol: "8.75 SOL",
    estimatedUsd: "$1,473",
    timestamp: "3m ago",
    signal: "Smart Money"
  }
];

const actionStyles: Record<ActivityAction, string> = {
  BUY: "border-emerald-300/35 bg-emerald-300/10 text-emerald-200 shadow-[0_0_18px_rgba(20,241,149,0.1)]",
  SELL: "border-rose-400/30 bg-rose-400/10 text-rose-200",
  TRANSFER: "border-violet-400/35 bg-violet-400/10 text-violet-200"
};

const signalStyles: Record<SignalBadge, string> = {
  "Fresh Wallet": "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  "Whale Wallet": "border-cyan-300/35 bg-cyan-300/10 text-cyan-100",
  "Smart Money": "border-emerald-300/35 bg-emerald-300/10 text-emerald-200",
  "Bundle Signal": "border-violet-400/40 bg-violet-400/[0.12] text-violet-100 shadow-[0_0_18px_rgba(153,69,255,0.14)]",
  "KOL Wallet": "border-amber-400/30 bg-amber-400/10 text-amber-200"
};

const actionIcons = {
  BUY: ArrowDownLeft,
  SELL: ArrowUpRight,
  TRANSFER: Repeat2
};

export default function TransactionFeed() {
  return (
    <section id="feed" className="px-4 pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Real-time Solana flow
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Wallet clusters, token CAs, and bundle activity
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Mock Solana intelligence feed showing wallet clusters, SPL token
            tickers, token CAs, SOL size, estimated USD value, and signal
            quality.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-violet-300/20 bg-[#070812]/90 shadow-[0_0_42px_rgba(153,69,255,0.12)]">
          <div className="hidden grid-cols-[1.25fr_0.72fr_0.75fr_0.9fr_0.95fr_0.95fr_0.65fr] gap-4 border-b border-violet-300/15 bg-white/[0.025] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 md:grid">
            <span>Wallet Cluster</span>
            <span>Action</span>
            <span>Token</span>
            <span>Amount</span>
            <span>Token CA</span>
            <span>Signal</span>
            <span className="text-right">Time</span>
          </div>

          <div className="divide-y divide-violet-300/10">
            {mockActivity.map((activity) => {
              const Icon = actionIcons[activity.action];

              return (
                <article
                  key={activity.id}
                  className="grid gap-4 px-5 py-4 transition-colors hover:bg-violet-400/[0.035] md:grid-cols-[1.25fr_0.72fr_0.75fr_0.9fr_0.95fr_0.95fr_0.65fr] md:items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-500/35 via-cyan-300/15 to-emerald-300/20 text-sm font-bold text-white shadow-[0_0_20px_rgba(153,69,255,0.14)]">
                      {activity.wallet.slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{activity.wallet}</p>
                      <p className="text-sm text-slate-400">{activity.label}</p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex w-fit items-center gap-2 rounded-lg border px-3 py-1 text-xs font-bold ${actionStyles[activity.action]}`}
                  >
                    <Icon size={14} />
                    {activity.action}
                  </span>

                  <span className="font-semibold text-white">{activity.token}</span>

                  <div>
                    <p className="font-semibold text-white">{activity.amountSol}</p>
                    <p className="text-sm text-slate-400">{activity.estimatedUsd}</p>
                  </div>

                  <span className="font-mono text-sm text-cyan-200/85">
                    {activity.tokenCa}
                  </span>

                  <span
                    className={`inline-flex w-fit rounded-lg border px-3 py-1 text-xs font-semibold ${signalStyles[activity.signal]}`}
                  >
                    {activity.signal}
                  </span>

                  <span className="text-left text-sm text-slate-400 md:text-right">
                    {activity.timestamp}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
