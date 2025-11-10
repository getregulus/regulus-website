import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import SwaggerChip from "@components/swagger-chip"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "API Docs", href: "/docs/api-docs" },
  { label: "Audit API" },
]

const endpoints = [
  { method: "GET", endpoint: "/audit", description: "Get organization audit logs" },
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
      />
      <main className="flex-grow">
        <section className="py-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-600 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              Audit API
            </h1>
            <div>
              {endpoints.map((ep, index) => (
                <SwaggerChip
                  key={index}
                  method={ep.method}
                  endpoint={ep.endpoint}
                  description={ep.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </DocLayout>
  )
}

export default AuditApi
