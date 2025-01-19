import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "API Docs", href: "/docs/api-docs" },
  { label: "Organizations API" },
]

const OrganizationsApi = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Organizations API"
        description="Explore the Organizations API for Regulus. Manage organizations, user roles, and permissions to optimize blockchain monitoring workflows."
        keywords={[
          "Organizations API",
          "User Roles API",
          "Permissions API",
          "Blockchain Monitoring",
          "Regulus API Documentation",
          "Organization Management",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/api-docs/organizations-api"
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

export default OrganizationsApi
