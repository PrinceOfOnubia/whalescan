"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Seiscan?",
    answer: "Seiscan is a Sei wallet tracker that monitors the activities of top memecoin traders and KOLs. It provides realtime transactions, token PnL, and a leaderboard ranking their performance."
  },
  {
    question: "Is Seiscan free to use?",
    answer: "All Seiscan features are free to use."
  },
  {
    question: "Can I track non-KOL wallets?",
    answer: "Yes, you can search any wallet address on Seiscan. However, its data is initially limited to the last 100 transactions unless you choose to load more."
  },
  {
    question: "How do I get my wallet on the leaderboard?",
    answer: "We are looking for the top trenchers! If you have $100k+ PnL in recent months, DM us your wallet for verification on X @seiscan."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mb-12">
      <h2 className="text-3xl font-bold text-white text-center mb-8">FAQs</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800/30 border border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-6 focus:outline-none hover:bg-gray-800/40 transition-colors flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform ${
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
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
