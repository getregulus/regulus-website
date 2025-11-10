import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Integrations" },
]

const Integrations = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Integrations"
        description="Discover how to integrate Regulus with third-party tools and services. Enhance your blockchain monitoring workflows with seamless integrations."
        keywords={[
          "Integrations",
          "Regulus Integrations",
          "Blockchain Integrations",
          "Third-Party Tools",
          "Workflow Automation",
          "Regulus Documentation",
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

export default Integrations
