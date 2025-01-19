import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "API Docs", href: "/docs/api-docs" },
  { label: "Watchlist API" },
]

const WatchlistApi = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Watchlist API"
        description="Explore the Watchlist API for Regulus. Learn how to create and manage watchlists for tracking specific transactions."
        keywords={[
          "Watchlist API",
          "Blockchain Watchlist",
          "Address Monitoring",
          "Transaction Tracking",
          "Regulus API Documentation",
          "Blockchain Monitoring",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/api-docs/watchlist-api"
        />
      </Seo>

      <main className="flex-grow">
        <section className="py-4">
          <div className="max-w-7xl mx-auto">
            {/* Main Title */}
            <h1 className="text-gray-600 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed italic">
              Writing In Progress...
            </h1>
          </div>
        </section>
      </main>
    </DocLayout>
  )
}

export default WatchlistApi
