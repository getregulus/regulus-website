import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Intelligence Agents" },
]

const IntelligenceAgents = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Intelligence Agents | Regulus Documentation"
        description="Explore Regulus Intelligence Agents — SDK-powered modules for watchlists, pattern recognition, risk scoring, and cross-chain & temporal reasoning. Enhance monitoring with advanced analytics and automation."
        keywords={[
          "Regulus Intelligence Agents",
          "Blockchain Analytics",
          "Risk Scoring",
          "Pattern Recognition",
          "Cross-Chain Monitoring",
          "Temporal Reasoning",
          "SDK",
          "Regulus Documentation",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/sdk/intelligence-agents"
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

export default IntelligenceAgents
