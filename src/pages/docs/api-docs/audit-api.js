import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "API Docs", href: "/docs/api-docs" },
  { label: "Audit API" },
]

const AuditApi = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Audit API"
        description="Discover the Audit API for Regulus. Learn how to retrieve and analyze audit logs for blockchain transaction activities."
        keywords={[
          "Audit API",
          "Blockchain Logs",
          "Audit Logs",
          "Transaction Monitoring",
          "Regulus API Documentation",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/api-docs/audit-api"
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

export default AuditApi
