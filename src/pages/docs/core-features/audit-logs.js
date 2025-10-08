import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Core Features", href: "/docs/core-features" },
  { label: "Audit Logs" },
]

const AuditLogs = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Audit Logs"
        description="Explore Audit Logs in Regulus. Learn how to track, review, and analyze blockchain transaction activities with detailed audit trails."
        keywords={[
          "Audit Logs",
          "Blockchain Audit",
          "Transaction Logs",
          "Blockchain Monitoring",
          "Regulus Documentation",
          "Detailed Audit Trails",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/transaction-monitoring/audit-logs"
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

export default AuditLogs
