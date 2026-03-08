import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            FashionSwap
          </h1>
          <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Browse</Link>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">List an Item</Link>
            <Link
              href="#"
              className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              Sign In
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Swap. Style. Sustain.
          </h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-8">
            Give your wardrobe a refresh by swapping fast fashion with others in
            your community.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="#"
              className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              Start Swapping
            </Link>
            <Link
              href="#"
              className="rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-6 py-3 font-medium hover:border-zinc-500 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "♻️",
              title: "Sustainable",
              description:
                "Reduce fashion waste by giving clothes a second life.",
            },
            {
              icon: "🤝",
              title: "Community",
              description:
                "Connect with others who share your style and values.",
            },
            {
              icon: "✨",
              title: "Refresh Your Wardrobe",
              description: "Discover unique pieces without buying new.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16 py-8 text-center text-sm text-zinc-400">
        <p>© {new Date().getFullYear()} FashionSwap. Built with Next.js & Redux Toolkit.</p>
      </footer>
    </div>
  );
}

