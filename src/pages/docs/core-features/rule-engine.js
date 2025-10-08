import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Core Features", href: "/docs/core-features" },
  { label: "Rule Engine" },
]

const RuleEngine = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Rule Engine"
        description="Explore the Rule Builder in Regulus. Learn how to create, customize, and manage monitoring rules for blockchain transactions with ease."
        keywords={[
          "Rule Engine",
          "Blockchain Monitoring Rules",
          "Custom Rules",
          "Transaction Monitoring",
          "Regulus Documentation",
          "Blockchain Rules Configuration",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/transaction-monitoring/rule-builder"
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

export default RuleEngine
