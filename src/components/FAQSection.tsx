"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is SolScan AI?",
    answer:
      "SolScan AI is a Solana-native intelligence dashboard for tracking wallet clusters, SPL token CAs, memecoin flow, smart money, whale wallets, and bundle activity."
  },
  {
    question: "Is this a generic Solana explorer?",
    answer:
      "No. This frontend is positioned around trader-ready wallet, token, and bundle intelligence rather than validator, block, or raw transaction browsing."
  },
  {
    question: "Is the live feed connected to Solana RPC yet?",
    answer:
      "Not yet. This phase is frontend-only and uses mock Solana wallet activity data. Real RPC, indexer, and alert integrations will come later."
  },
  {
    question: "What wallet signals can I monitor?",
    answer:
      "The interface is prepared for Fresh Wallet, Whale Wallet, Smart Money, Bundle Signal, and KOL Wallet labels across BUY, SELL, and TRANSFER events sized in SOL with estimated USD values."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 pb-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-white">FAQs</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-violet-300/15 bg-white/[0.035] shadow-[0_0_24px_rgba(153,69,255,0.07)]"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-violet-400/[0.04] focus:outline-none"
            >
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <svg
                className={`h-5 w-5 shrink-0 transform text-slate-400 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6">
                <p className="leading-relaxed text-slate-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
