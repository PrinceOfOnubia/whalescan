"use client";

import Link from "next/link";

interface Transaction {
  id: string;
  trader: string;
  action: "bought" | "sold";
  amount: string;
  amountUsd: string;
  token: string;
  price: string;
  timeAgo: string;
  txHash: string;
  traderImage: string;
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    trader: "seiwhale92",
    action: "sold",
    amount: "2.15 sei",
    amountUsd: "28.7m",
    token: "Big Floppa",
    price: "$0.000013",
    timeAgo: "14s",
    txHash: "abc123",
    traderImage: "https://ext.same-assets.com/3959085109/3602986825.png"
  },
  {
    id: "2",
    trader: "SeiTrader",
    action: "sold",
    amount: "1.95 sei",
    amountUsd: "47.4m",
    token: "PRAY",
    price: "$0.0000066",
    timeAgo: "17s",
    txHash: "def456",
    traderImage: "https://ext.same-assets.com/3959085109/1294207204.png"
  },
  {
    id: "3",
    trader: "SeiTrader",
    action: "sold",
    amount: "0.997 sei",
    amountUsd: "15.8m",
    token: "PRAY",
    price: "$0.000010",
    timeAgo: "25s",
    txHash: "ghi789",
    traderImage: "https://ext.same-assets.com/3959085109/1294207204.png"
  },
  {
    id: "4",
    trader: "seiwhale92",
    action: "bought",
    amount: "1.52 sei",
    amountUsd: "22.3m",
    token: "Big Floppa",
    price: "$0.000011",
    timeAgo: "29s",
    txHash: "jkl012",
    traderImage: "https://ext.same-assets.com/3959085109/3602986825.png"
  },
  {
    id: "5",
    trader: "SeiTrader",
    action: "sold",
    amount: "1.66 sei",
    amountUsd: "29.1m",
    token: "Big Floppa",
    price: "$0.0000091",
    timeAgo: "40s",
    txHash: "mno345",
    traderImage: "https://ext.same-assets.com/3959085109/1294207204.png"
  },
  {
    id: "6",
    trader: "SeiGambler",
    action: "sold",
    amount: "3.7 sei",
    amountUsd: "22.2m",
    token: "SHILLCOIN",
    price: "$0.000027",
    timeAgo: "48s",
    txHash: "pqr678",
    traderImage: "https://ext.same-assets.com/3959085109/611962820.png"
  },
  {
    id: "7",
    trader: "SeiDali",
    action: "sold",
    amount: "0.546 sei",
    amountUsd: "13.5m",
    token: "RUG",
    price: "$0.0000065",
    timeAgo: "53s",
    txHash: "stu901",
    traderImage: "https://ext.same-assets.com/3959085109/3507304200.png"
  },
  {
    id: "8",
    trader: "SeiCupsey",
    action: "sold",
    amount: "6.19 sei",
    amountUsd: "86.8m",
    token: "RUG",
    price: "$0.000011",
    timeAgo: "59s",
    txHash: "vwx234",
    traderImage: "https://ext.same-assets.com/3959085109/2167919955.png"
  },
  {
    id: "9",
    trader: "SeiDali",
    action: "bought",
    amount: "1.06 sei",
    amountUsd: "13.5m",
    token: "RUG",
    price: "$0.000013",
    timeAgo: "1m",
    txHash: "yz0123",
    traderImage: "https://ext.same-assets.com/3959085109/3507304200.png"
  },
  {
    id: "10",
    trader: "SeiCupsey",
    action: "bought",
    amount: "3.02 sei",
    amountUsd: "86.8m",
    token: "RUG",
    price: "$0.0000056",
    timeAgo: "1m",
    txHash: "abc789",
    traderImage: "https://ext.same-assets.com/3959085109/2167919955.png"
  }
];

export default function TransactionFeed() {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-12">
      <div className="bg-gray-800/30 border border-gray-700 rounded-lg overflow-hidden">
        {mockTransactions.map((tx) => (
          <div key={tx.id} className="border-b border-gray-700 last:border-b-0">
            <div className="flex items-center justify-between p-4 hover:bg-gray-800/20 transition-colors">
              <div className="flex items-center gap-3 flex-1">
                {/* Trader Avatar */}
                <img
                  src={tx.traderImage}
                  alt={tx.trader}
                  className="w-8 h-8 rounded-full"
                />

                {/* Transaction Details */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Link
                    href={`/account/${tx.trader}`}
                    className="font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {tx.trader}
                  </Link>

                  <span className="text-gray-300">{tx.action}</span>

                  <span
                    className={`font-medium ${
                      tx.action === "bought" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {tx.amount} ({tx.amountUsd})
                  </span>

                  <span className="text-gray-300">of</span>

                  <span className="font-semibold text-white cursor-pointer hover:text-blue-400 transition-colors">
                    {tx.token}
                  </span>

                  <span className="text-gray-300">at</span>

                  <span className="text-yellow-400 font-medium">
                    {tx.price}
                  </span>
                </div>
              </div>

              {/* Time and Link */}
              <a
                href={`https://seitrace.com/tx/${tx.txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap ml-4"
              >
                {tx.timeAgo} <span className="remove-mobile">ago</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
