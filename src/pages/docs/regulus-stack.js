import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Regulus Stack" },
]

const RegulusStack = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Regulus Stack"
        description="Explore the technology stack powering Regulus. Learn about the frameworks, tools, and infrastructure used to deliver advanced blockchain monitoring solutions."
        keywords={[
          "Regulus Stack",
          "Technology Stack",
          "Blockchain Monitoring Stack",
          "Regulus Infrastructure",
          "Regulus Documentation",
          "Regulus Tech Stack",
        ]}
      />

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

export default RegulusStack
