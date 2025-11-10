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
  { method: "GET", endpoint: "/rules", description: "Get all rules" },
  { method: "POST", endpoint: "/rules", description: "Create a new rule" },
  { method: "PUT", endpoint: "/rules/{id}", description: "Update a rule" },
  { method: "DELETE", endpoint: "/rules/{id}", description: "Delete a rule" },
]

const RulesApi = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Rules API"
        description="Discover the Rules API for Regulus. Learn how to define, manage, and customize rules for monitoring blockchain transactions effectively."
        keywords={[
          "Rules API",
          "Blockchain Monitoring Rules",
          "Custom Rules API",
          "Transaction Monitoring",
          "Regulus API Documentation",
          "Rules Management",
        ]}
      />

      <main className="flex-grow">
        <section className="py-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-600 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              Rules API
            </h1>
            <p className="text-gray-600 mb-6">
              Manage rules with these API endpoints:
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

export default RulesApi
