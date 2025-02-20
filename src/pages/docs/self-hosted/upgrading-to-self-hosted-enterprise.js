import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Self Hosted", href: "/docs/self-hosted" },
  { label: "Upgrading to Self-Hosted Enterprise" },
]

const Upgrading = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Upgrading to Self-Hosted Enterprise"
        description="Learn how to upgrade from the basic self-hosted version of Regulus to the enterprise version. Unlock advanced features and enhanced scalability."
        keywords={[
          "Upgrading to Self-Hosted Enterprise",
          "Regulus Enterprise",
          "Self-Hosted Upgrade",
          "Blockchain Monitoring Enterprise",
          "Advanced Blockchain Monitoring",
          "Regulus Documentation",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/self-hosted/upgrading-to-self-hosted-enterprise"
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

export default Upgrading
