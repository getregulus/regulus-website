import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import { Link } from "gatsby"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Core Features", href: "/docs/core-features" },
  { label: "Flag Alerts" },
]

const FlagAlerts = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Flag Alerts | Regulus Documentation"
        description="Learn how Regulus generates and manages flag alerts for blockchain transactions. Discover integrations, CSV exports, and how to stay informed on flagged activity."
        keywords={[
          "Flag Alerts",
          "Transaction Alerts",
          "Blockchain Monitoring",
          "Alert Management",
          "Regulus Documentation",
        ]}
      />

      <main className="flex-grow">
        <section className="py-4">
          <div className="max-w-7xl mx-auto text-gray-700">
            <h1 className="text-gray-800 text-2xl sm:text-3xl font-medium mb-4">
              Flag Alerts
            </h1>

            <p className="mb-4 leading-relaxed">
              Flag alerts are automatically generated when a transaction matches
              rules or watchlists configured in your organization. These alerts
              allow your compliance or monitoring teams to review suspicious
              activity quickly.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              How Flag Alerts Work
            </h2>
            <ol className="list-decimal pl-6 mb-4 leading-relaxed">
              <li>A transaction is received and validated..</li>
              <li>
                It is checked against organization-specific watchlists and
                evaluated by the rule engine.
              </li>
              <li>
                If a match occurs, a <strong>flag alert</strong> is created and
                logged for auditing purposes.
              </li>
              <li>
                Alerts are sent asynchronously through the platform and via
                configured integrations.
              </li>
            </ol>

            <p className="mb-4 leading-relaxed">
              Flag alerts are also delivered to external systems using
              integrations such as webhooks or other 3rd-party applications. See
              our{" "}
              <Link
                to="/docs/integrations/"
                className="text-blue-600 hover:underline"
              >
                Integrations Documentation
              </Link>{" "}
              for setup instructions.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              Viewing and Managing Alerts
            </h2>
            <p className="mb-4 leading-relaxed">
              Your team can retrieve, create, or delete alerts via the API.
              Alerts include key details such as transaction ID, reason for
              flagging, timestamp, and linked transaction data.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              Exporting Alerts
            </h2>
            <p className="mb-4 leading-relaxed">
              For reporting or compliance purposes, all flag alerts can be
              exported as CSV. The export includes transaction details, alert
              reasons, and timestamps. This allows easy review or ingestion into
              other systems.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              Best Practices
            </h2>
            <ul className="list-disc pl-6 mb-6 leading-relaxed">
              <li>
                Regularly review your rules and watchlists to minimize false
                positives.
              </li>
              <li>
                Use integrations to route alerts to the right team or system
                automatically.
              </li>
              <li>
                Periodically export alerts for compliance audits or internal
                review.
              </li>
            </ul>

            <p className="mb-4 leading-relaxed">
              You can manage rules using the <code>/alerts</code> endpoints.
              Refer to the official API documentation for full details and
              examples:
            </p>
            <Link
              to="/docs/api-docs/rules-api/"
              className="text-blue-600 hover:underline"
            >
              Regulus Alerts API Documentation
            </Link>
          </div>
        </section>
      </main>
    </DocLayout>
  )
}

export default FlagAlerts
