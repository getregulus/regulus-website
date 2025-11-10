import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import SwaggerChip from "@components/swagger-chip"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "API Docs", href: "/docs/api-docs" },
  { label: "Rules API" },
]

const endpoints = [
  { method: "GET", endpoint: "/alerts", description: "Get all alerts" },
  { method: "POST", endpoint: "/alerts", description: "Create a new alert" },
  {
    method: "DELETE",
    endpoint: "/alerts/{id}",
    description: "Delete an alert",
  },
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
      />
      <main className="flex-grow">
        <section className="py-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-600 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              Alerts API
            </h1>
            <p className="text-gray-600 mb-6">
              Manage alerts with these API endpoints:
            </p>
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

export default AlertsApi
