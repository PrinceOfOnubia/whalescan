import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seiscan",
  description: "Track the Top Memecoin Traders on Sei in Realtime",
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
