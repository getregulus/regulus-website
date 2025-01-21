import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import SwaggerChip from "@components/swagger-chip"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "API Docs", href: "/docs/api-docs" },
  { label: "Watchlist API" },
]

const endpoints = [
  {
    method: "GET",
    endpoint: "/watchlist",
    description: "Get watchlist entries",
  },
  {
    method: "POST",
    endpoint: "/watchlist",
    description: "Add entry to watchlist",
  },
  {
    method: "DELETE",
    endpoint: "/watchlist/{id}",
    description: "Remove entry from watchlist",
  },
]

const WatchlistApi = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Watchlist API"
        description="Explore the Watchlist API for Regulus. Learn how to create and manage watchlists for tracking specific transactions."
        keywords={[
          "Watchlist API",
          "Blockchain Watchlist",
          "Address Monitoring",
          "Transaction Tracking",
          "Regulus API Documentation",
          "Blockchain Monitoring",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/api-docs/watchlist-api"
        />
      </Seo>

      <main className="flex-grow">
        <section className="py-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-600 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              Watchlist API
            </h1>
            <p className="text-gray-600 mb-6">
              Watchlist management endpoints:
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

export default WatchlistApi
