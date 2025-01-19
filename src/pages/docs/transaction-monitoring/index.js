import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Transaction Monitoring" },
]

const TransactionMonitoring = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Transaction Monitoring"
        description="Discover how Regulus helps you monitor blockchain transactions in real-time. Learn about alerts, audit logs, and advanced monitoring features."
        keywords={[
          "Transaction Monitoring",
          "Blockchain Monitoring",
          "Real-Time Monitoring",
          "Audit Logs",
          "Custom Alerts",
          "Regulus Documentation",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/transaction-monitoring"
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

export default TransactionMonitoring
