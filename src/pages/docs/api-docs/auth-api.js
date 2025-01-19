import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "API Docs", href: "/docs/api-docs" },
  { label: "Auth API" },
]

const AuthApi = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Authentication API"
        description="Learn about the Authentication API for Regulus. Understand how to authenticate users, manage tokens, and secure your blockchain monitoring integrations."
        keywords={[
          "Authentication API",
          "Auth API",
          "Blockchain Authentication",
          "User Tokens",
          "Secure API Access",
          "Regulus API Documentation",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/api-docs/auth-api"
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

export default AuthApi
