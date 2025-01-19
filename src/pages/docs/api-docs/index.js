import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [{ label: "Docs", href: "/docs" }, { label: "API Docs" }]

const ApiDocs = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="API Documentation"
        description="Access the complete API documentation for Regulus. Learn how to integrate, manage, and optimize blockchain monitoring through our comprehensive API endpoints."
        keywords={[
          "Regulus API Documentation",
          "Blockchain API",
          "Regulus API",
          "API Endpoints",
          "Blockchain Monitoring API",
          "Developer Documentation",
        ]}
      >
        <meta property="og:url" content="https://getregulus.co/docs/api-docs" />
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

export default ApiDocs
