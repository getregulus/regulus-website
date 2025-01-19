import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Getting Started", href: "/docs/gettting-started" },
  { label: "Service Map" },
]

const ServiceMap = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Getting Started with Service Map"
        description="Explore the Service Map feature in Regulus. Learn how to visualize blockchain monitoring workflows and map key services for better insights."
        keywords={[
          "Service Map",
          "Blockchain Monitoring Map",
          "Visualize Workflows",
          "Regulus Service Map",
          "Regulus Documentation",
          "Blockchain Insights",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/getting-started/service-map"
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

export default ServiceMap
