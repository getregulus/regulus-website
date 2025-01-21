import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import SwaggerChip from "@components/swagger-chip"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "API Docs", href: "/docs/api-docs" },
  { label: "Auth API" },
]

const endpoints = [
  {
    method: "POST",
    endpoint: "/auth/register",
    description: "Register a new user",
  },
  {
    method: "POST",
    endpoint: "/auth/register/admin",
    description: "Register a new user as admin",
  },
  {
    method: "POST",
    endpoint: "/auth/login",
    description: "Log in an existing user",
  },
  {
    method: "POST",
    endpoint: "/auth/google-register",
    description: "Register a new user with Google Authentication",
  },
  {
    method: "POST",
    endpoint: "/auth/google-login",
    description: "Log in an existing user with Google authentication",
  },
  {
    method: "GET",
    endpoint: "/auth/me",
    description: "Fetch authenticated user details",
  },
  {
    method: "PUT",
    endpoint: "/rules/{id}",
    description: "Update authenticated user details",
  },
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
            <h1 className="text-gray-600 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              Auth API
            </h1>
            <p className="text-gray-600 mb-6">
              Authentication and user management endpoints:
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

export default AuthApi
