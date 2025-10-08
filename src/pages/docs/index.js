import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "What is Regulus?" },
]

const WhatIsRegulus = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="What is Regulus?"
        description="Discover Regulus, a blockchain monitoring and alerting platform. Learn about real-time transaction analysis, custom rules, audit logging, and more."
      >
        <meta
          name="keywords"
          content="Blockchain Monitoring, Web3 Transactions, Regulus Features, Audit Logging, API Authentication"
        />
        <meta property="og:url" content="https://getregulus.co/docs" />
      </Seo>
      <main className="flex-grow">
        <section className="py-4">
          <div className="max-w-7xl mx-auto">
            {/* Main Title */}
            <h1 className="text-gray-800 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              What is Regulus?
            </h1>

            {/* Unified Description */}
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              Regulus is a{" "}
              <strong>blockchain monitoring and compliance platform</strong>{" "}
              that helps organizations detect fraud, stay compliant, and reduce
              legal risks. It provides real-time transaction visibility,
              AI-powered risk scoring, and automated alerts to simplify
              blockchain oversight.
            </p>
            <p className="text-gray-700 text-base mb-12 leading-relaxed">
              Whether you're managing Web3 transactions, integrating blockchain
              into existing systems, or navigating global regulations, Regulus
              keeps you informed and protected — helping you move faster with
              confidence.
            </p>

            {/* Key Features Section */}
            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-8">
              Key Features
            </h2>

            {/* Unified Key Features Bulleted Format */}
            <ul className="list-disc list-inside space-y-4">
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Real-Time Blockchain Monitoring:
                </span>{" "}
                Monitor blockchain activity as it happens. Detect anomalies,
                track token flows, and visualize transactions across multiple
                chains instantly.
              </li>
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Custom Alerts & Risk Scoring:
                </span>{" "}
                Receive automated alerts for suspicious transactions or policy
                breaches. Our AI engine continuously scores risk to prioritize
                what matters most.
              </li>
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Global Compliance Rulesets:
                </span>{" "}
                Stay ahead of evolving Web3 regulations with built-in rulesets
                aligned to KYC, AML, and FATF standards. Reduce manual review
                time and legal costs.
              </li>
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Third-Party Integrations:
                </span>{" "}
                Connect Regulus with your existing tools — from Slack and email
                to on-chain analytics and internal dashboards — for a seamless
                workflow.
              </li>
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Comprehensive Audit Logging:
                </span>{" "}
                Maintain immutable records of system and user activity. Export
                detailed logs for audits, investigations, and compliance
                reporting.
              </li>
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Enterprise-Ready Security & Scalability:
                </span>{" "}
                Built with token-based authentication and role-based access
                control. Easily scale from startups to enterprise-grade
                transaction volumes.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </DocLayout>
  )
}

export default WhatIsRegulus
