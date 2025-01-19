import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Self Hosted", href: "/docs/self-hosted" },
  { label: "Troubleshooting" },
]

const Troubleshooting = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Self-Hosted Troubleshooting"
        description="Find solutions to common issues with the self-hosted version of Regulus. Learn how to debug and resolve setup, deployment, and configuration problems."
        keywords={[
          "Self-Hosted Troubleshooting",
          "Regulus Troubleshooting",
          "Blockchain Monitoring Issues",
          "Debugging Regulus",
          "Regulus Deployment Problems",
          "Regulus Documentation",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/self-hosted/troubleshooting"
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

export default Troubleshooting
