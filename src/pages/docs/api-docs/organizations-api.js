import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import SwaggerChip from "@components/swagger-chip"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "API Docs", href: "/docs/api-docs" },
  { label: "Organizations API" },
]

const endpoints = [
  {
    method: "GET",
    endpoint: "/organizations",
    description: "Get user's organizations",
  },
  {
    method: "POST",
    endpoint: "/organizations",
    description: "Create a new organization",
  },
  {
    method: "GET",
    endpoint: "/organizations/{id}/members",
    description: "Get organization members",
  },
  {
    method: "POST",
    endpoint: "/organizations/{id}/members",
    description: "Add a member to organization",
  },
  {
    method: "DELETE",
    endpoint: "/organizations/{id}/members/{userId}",
    description: "Remove a member from organization",
  },
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
      />

      <main className="flex-grow">
        <section className="py-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-600 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              Organizations API
            </h1>
            <p className="text-gray-600 mb-6">
              Organization management endpoints:
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

export default OrganizationsApi
