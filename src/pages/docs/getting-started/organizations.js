import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Getting Started", href: "/docs/gettting-started" },
  { label: "Organizations" },
]

const Organizations = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Getting Started with Organizations"
        description="Learn how to manage organizations in Regulus. Discover how to create, configure, and assign roles for effective blockchain monitoring workflows."
        keywords={[
          "Getting Started",
          "Organizations in Regulus",
          "Organization Management",
          "Blockchain Monitoring Roles",
          "Regulus Documentation",
          "Organization Configuration",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/getting-started/organizations"
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

export default Organizations
