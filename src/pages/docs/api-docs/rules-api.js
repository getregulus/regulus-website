import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "API Docs", href: "/docs/api-docs" },
  { label: "Rules API" },
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
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/api-docs/rules-api"
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

export default RulesApi
