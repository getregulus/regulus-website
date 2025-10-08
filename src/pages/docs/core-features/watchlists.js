import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Core Features", href: "/docs/core-features" },
  { label: "Watchlists" },
]

const Watchlists = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Watchlists"
        description="Learn about Watchlists in Regulus. Discover how to create, manage, and monitor blockchain addresses and transactions using Watchlists."
        keywords={[
          "Watchlists",
          "Blockchain Watchlists",
          "Transaction Monitoring",
          "Address Monitoring",
          "Regulus Documentation",
          "Blockchain Monitoring Features",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/transaction-monitoring/watchlists"
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

export default Watchlists
