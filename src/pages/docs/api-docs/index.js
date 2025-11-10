import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import { Link } from "gatsby"

const breadcrumbPath = [{ label: "Docs", href: "/docs" }, { label: "API Docs" }]

const ApiDocs = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="API Documentation"
        description="Access the complete API documentation for Regulus. Learn how to integrate, manage, and optimize blockchain monitoring through our comprehensive API endpoints."
        keywords={[
          "Regulus API Documentation",
          "Blockchain API",
          "Regulus API",
          "API Endpoints",
          "Blockchain Monitoring API",
          "Developer Documentation",
        ]}
      />

      <main className="">
        <section className="py-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-800 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              API Documentation
            </h1>

            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-6">
              Understanding Your API Key
            </h2>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              To interact with the Regulus API, you need a unique API key, which
              authorizes your requests and links them to your account. Keep this
              key secure, as it grants access to your account's resources. Note
              that admin privileges are required to generate and access the key.
            </p>

            <h3 className="text-gray-800 text-lg sm:text-xl font-medium mb-4">
              How to Get Your API Key
            </h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-6">
              <li>Log in to your Regulus account.</li>
              <li>
                Navigate to the <strong>Organization Settings</strong> page.
              </li>
              <li>
                Locate the <strong>API Key</strong> section.
              </li>
              <li>
                Click the <strong>Generate API Key</strong> button to create a
                new key.
              </li>
              <li>
                Copy the key and store it securely. Avoid sharing it publicly.
              </li>
            </ol>

            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700 rounded mb-6">
              <strong>Note:</strong> Your API key is a sensitive credential.
              Treat it like a password to ensure your account remains secure.
            </div>

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

            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              Use your API key in the{" "}
              <code className="bg-gray-100 px-1 rounded">Authorization</code>{" "}
              header of your requests:
            </p>
            <div className="overflow-x-auto mb-6 bg-gray-900">
              <pre className=" text-gray-200 p-4 rounded w-full">
                <code>
                  curl -X GET https://api.regulus.co/v1/resource \\ -H
                  "Authorization: Bearer YOUR_API_KEY"
                </code>
              </pre>
            </div>
          </div>
          {/* References */}
          <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-6">
            References
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <Link
                to="/docs/api-docs/auth-api/"
                className="text-blue-600 hover:underline"
              >
                Auth API
              </Link>{" "}
              - Learn how to configure and use token-based authentication.
            </li>
            <li>
              <Link
                to="/docs/api-docs/alerts-api/"
                className="text-blue-600 hover:underline"
              >
                Alerts API
              </Link>{" "}
              - Manage and configure alerts for transaction monitoring.
            </li>
            <li>
              <Link
                to="/docs/api-docs/audit-api/"
                className="text-blue-600 hover:underline"
              >
                Audit API
              </Link>{" "}
              - Explore audit system logs.
            </li>
            <li>
              <Link
                to="/docs/api-docs/organizations-api/"
                className="text-blue-600 hover:underline"
              >
                Organizations API
              </Link>{" "}
              - Manage organizations and teams in your Regulus workspace.
            </li>
            <li>
              <Link
                to="/docs/api-docs/rules-api/"
                className="text-blue-600 hover:underline"
              >
                Rules API
              </Link>{" "}
              - Define and manage monitoring rules for transactions.
            </li>
            <li>
              <Link
                to="/docs/api-docs/transactions-api/"
                className="text-blue-600 hover:underline"
              >
                Transactions API
              </Link>{" "}
              - Access and analyze your transaction data.
            </li>
          </ul>
        </section>
      </main>
    </DocLayout>
  )
}

export default ApiDocs
