import React from "react"
import { Link } from "gatsby"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Core Features" },
]

const features = [
  {
    title: "Transaction Monitoring",
    description:
      "Monitor blockchain transactions in real-time with flexible filters and validation. Detect suspicious activity instantly.",
    href: "/docs/core-features/transaction-monitoring",
  },
  {
    title: "Rule Engine",
    description:
      "Create and manage rules to automatically flag transactions based on complex conditions and logical expressions.",
    href: "/docs/core-features/rule-engine",
  },
  {
    title: "Flag Alerts",
    description:
      "Set up alerts that fit your workflow. Define triggers, choose delivery channels, and stay notified in real time.",
    href: "/docs/core-features/flag-alerts",
  },
  {
    title: "Audit Logs",
    description:
      "Track every change, decision, and alert in one place. Regulus provides detailed audit logs for full transparency.",
    href: "/docs/core-features/audit-logs",
  },
]

const CoreFeatures = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Core Features"
        description="Explore Regulus core features: transaction monitoring, rule engine, flag alerts, audit logs, and watchlists."
        keywords={[
          "Transaction Monitoring",
          "Blockchain Monitoring",
          "Real-Time Alerts",
          "Audit Logs",
          "Rule Engine",
          "Regulus Documentation",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/core-features"
        />
      </Seo>

      <main className="flex-grow">
        <section className="py-4">
          <div className="mx-auto text-gray-900 ">
            {/* Title */}
            <h1 className="text-gray-800 text-2xl sm:text-3xl font-medium mb-4">
              Core Features
            </h1>
            <p className="mb-10 leading-relaxed">
              Regulus provides a complete toolkit for monitoring blockchain
              transactions in real time. Explore each core feature to learn how
              you can detect suspicious activity, automate decisions, customize
              alerts, and maintain full transparency.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map(feature => (
                <Link
                  key={feature.title}
                  to={feature.href}
                  className="group block p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </DocLayout>
  )
}

export default CoreFeatures
