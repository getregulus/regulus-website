import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Transaction Monitoring", href: "/docs/transaction-monitoring" },
  { label: "Feeding Transactions" },
]

const FeedingTransactions = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Feeding Transactions"
        description="Learn how to feed transactions into Regulus for monitoring. Integrate blockchain data sources to track and analyze transactions in real-time."
        keywords={[
          "Feeding Transactions",
          "Blockchain Transactions",
          "Transaction Integration",
          "Real-Time Monitoring",
          "Regulus Documentation",
          "Blockchain Monitoring",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/transaction-monitoring/feeding-transactions"
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

export default FeedingTransactions
