import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import { Link } from "gatsby"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Getting Started" },
]

const GettingStarted = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Getting Started"
        description="Get started with Regulus. Learn how to set up your environment, configure blockchain monitoring, and explore key features."
        keywords={[
          "Getting Started",
          "Regulus Setup",
          "Blockchain Monitoring Setup",
          "Regulus Features",
          "Blockchain Integration",
          "Regulus Documentation",
        ]}
      />

      <main className="flex-grow">
        <section className="py-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-800 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              Getting Started
            </h1>
            <p className="text-gray-700 text-base mb-8">
              Welcome to Regulus! Follow this guide to set up and start
              monitoring blockchain transactions with ease. This section
              provides steps for the self-hosted version of Regulus.
            </p>
            {/* Self-Hosted Section */}
            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-6">
              Self-Hosted Version (Dockerized)
            </h2>
            <p className="text-gray-700 text-base mb-4">
              The Dockerized setup is the recommended method for deploying
              Regulus, providing a streamlined and consistent installation
              experience. Follow these steps:
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              To view a step-by-step setup, visit the{" "}
              <Link
                to="/docs/self-hosted/installation/"
                className="text-blue-600 hover:underline"
              >
                Installation Guide
              </Link>
              .
            </p>

          </div>
        </section>
      </main>
    </DocLayout>
  )
}

export default GettingStarted
