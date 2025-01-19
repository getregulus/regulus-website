import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "API Docs", href: "/docs/api-docs" },
  { label: "Rules API" },
]

const AlertsApi = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Alerts API"
        description="Explore the Alerts API documentation for Regulus. Learn how to create, manage, and customize alerts for blockchain transaction monitoring."
        keywords={[
          "Alerts API",
          "Blockchain Monitoring",
          "Custom Alerts",
          "Transaction Monitoring",
          "Regulus API Documentation",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/api-docs/alerts-api"
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

export default AlertsApi
