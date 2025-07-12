export default function FeaturesSection() {
  const features = [
    "Monitor Trades from Top Wallets",
    "Discover New and Trending Tokens",
    "Analyze the Most Profitable Wallets"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center hover:bg-gray-800/40 transition-colors"
          >
            <span className="text-white font-medium text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
