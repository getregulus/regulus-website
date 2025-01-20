import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import SwaggerChip from "@components/swagger-chip"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "API Docs", href: "/docs/api-docs" },
  { label: "Transactions API" },
]

const endpoints = [
  {
    method: "GET",
    endpoint: "/transactions",
    description: "Get all transactions",
  },
  {
    method: "POST",
    endpoint: "/transactions",
    description: "Create a new transaction",
  },
]

const TransactionsApi = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Transactions API"
        description="Learn about the Transactions API for Regulus. Understand how to retrieve, manage, and analyze blockchain transactions for efficient monitoring."
        keywords={[
          "Transactions API",
          "Blockchain Transactions",
          "Transaction Monitoring",
          "Blockchain Monitoring",
          "Regulus API Documentation",
          "Blockchain Data Analysis",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/api-docs/transactions-api"
        />
      </Seo>

      <main className="flex-grow">
        <section className="py-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-600 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              Transactions API
            </h1>
            <p className="text-gray-600 mb-6">
              Transaction monitoring endpoints:
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

export default TransactionsApi
