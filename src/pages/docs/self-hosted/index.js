import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Self Hosted" },
]

const SelfHosted = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Self-Hosted Setup"
        description="Learn how to set up the self-hosted version of Regulus. Follow this guide to install, configure, and deploy Regulus on your infrastructure."
        keywords={[
          "Self-Hosted Regulus",
          "Self-Hosted Setup",
          "Regulus Deployment",
          "Blockchain Monitoring Setup",
          "Regulus Installation",
          "Regulus Documentation",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/self-hosted/"
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

export default SelfHosted
