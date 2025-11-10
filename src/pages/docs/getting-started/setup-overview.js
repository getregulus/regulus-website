import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Getting Started", href: "/docs/getting-started" },
  { label: "Setup Overview" },
]

const SetupOverview = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Setup Overview | Regulus Documentation"
        description="Follow this quick setup guide to start monitoring Web3 transactions with Regulus. Learn how to create an organization, get your API key, install the SDK, and send your first transaction."
        keywords={[
          "Setup Overview",
          "Getting Started with Regulus",
          "Web3 Monitoring Setup",
          "Blockchain SDK Integration",
          "Transaction Monitoring",
          "Regulus API",
        ]}
      />

      <main className="flex-grow">
        <section className="py-4">
          <div className="mx-auto text-gray-700">
            {/* Title */}
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Setup Overview
            </h1>

            {/* Intro Paragraph */}
            <p className="text-base mb-6 leading-relaxed">
              Get started with <strong>Regulus</strong> in just a few steps.
              This guide walks you through creating your organization, obtaining
              your API key, installing the SDK, and integrating transaction
              monitoring into your codebase.
            </p>

            {/* Step 1 */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              1. Create Your Organization
            </h2>
            <p className="mb-4 leading-relaxed">
              Sign in to your Regulus dashboard and create a new organization.
              Each organization has its own API keys, members, and monitoring
              rules.
            </p>
            <pre className="bg-gray-900 text-gray-100 text-sm rounded-lg p-4 overflow-x-auto">
              {`{
  "name": "My Web3 Project"
}`}
            </pre>

            {/* Step 2 */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              2. Get Your API Key
            </h2>
            <p className="mb-4 leading-relaxed">
              After creating an organization, navigate to its{" "}
              <strong>Organization Settings</strong> page to generate your API
              key. You’ll use this key to authenticate requests from your SDK or
              backend.
            </p>
            <div className="bg-gray-50 p-4 border border-gray-200 rounded shadow-sm mb-6">
              <h4 className="text-gray-800 text-lg font-medium mb-2">
                Example Organization API Key:
              </h4>
              <div className="flex items-center">
                <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded mr-4">
                  fff5cd6c-8aec-4c07-991d-c56cea676a37
                </code>
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Copy
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              3. Install the SDK
            </h2>
            <p className="mb-4 leading-relaxed">
              Install the
              <a
                href="
https://www.npmjs.com/package/regulus-sdk"
                target="_blank"
                className="text-blue-600 hover:underline ml-1"
              >
                Regulus SDK
              </a>{" "}
              to start sending transactions and receiving alerts.
            </p>
            <pre className="bg-gray-900 text-gray-100 text-sm rounded-lg p-4 overflow-x-auto">
              {`npm install @regulus/sdk`}
            </pre>

            {/* Step 4 */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              4. Integrate the SDK
            </h2>
            <p className="mb-4 leading-relaxed">
              Get your API key from the organization dashboard and implement the
              SDK in your codebase to start sending transaction data for
              monitoring.
            </p>
            <pre className="bg-gray-900 text-gray-100 text-sm rounded-lg p-4 overflow-x-auto">
              {`const RegulusSDK = require('regulus-sdk');

const apiKey = process.env.API_KEY; 
const organizationId = process.env.ORGANIZATION_ID;
const sdk = new RegulusSDK(apiKey, organizationId);

const transactionData = {
  transaction_id: "txn_12345",
  user_id: "user_001",
  amount: 1000,
  currency: "USD",
  country: "US",
  timestamp: new Date().toISOString(),
};`}
            </pre>

            {/* Step 5 */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              5. Set Up Rules
            </h2>
            <p className="mb-4 leading-relaxed">
              Define rules directly in the dashboard or through the API to
              trigger alerts for suspicious patterns, transaction thresholds, or
              specific addresses.
            </p>

            {/* Step 6 */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              6. View Results
            </h2>
            <p className="mb-8 leading-relaxed">
              Check alerts and logs in real-time from the dashboard or via the{" "}
              <code>/alerts</code> endpoint. You can also export alertes
              for compliance and reporting.
            </p>
          </div>
        </section>
      </main>
    </DocLayout>
  )
}

export default SetupOverview
