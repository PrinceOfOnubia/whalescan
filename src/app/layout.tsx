import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolScan AI",
  description:
    "Real-time Solana tracking for smart money, memecoins, whale wallets, token CAs, wallet clusters, and bundle activity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
