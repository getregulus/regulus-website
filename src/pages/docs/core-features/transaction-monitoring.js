import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import { Link } from "gatsby"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Core Features", href: "/docs/core-features" },
  { label: "Transaction Monitoring" },
]

const TransactionMonitoring = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Transaction Monitoring"
        description="Learn how to feed transactions into Regulus for monitoring. Integrate blockchain & off-chain data sources to track and analyze transactions in real-time."
        keywords={[
          "Feeding Transactions",
          "Blockchain Transactions",
          "Transaction Integration",
          "Real-Time Monitoring",
          "Regulus Documentation",
          "Transaction API",
        ]}
      />

      <main className="flex-grow">
        <section className="py-4">
          <div className="mx-auto text-gray-700">
            <h1 className="text-gray-800 text-2xl sm:text-3xl font-medium mb-4">
              Feeding Transactions into Regulus
            </h1>

            <p className="mb-4 leading-relaxed">
              Use the Transactions API or our SDK to push on-chain or off-chain
              transactions into Regulus so they can be evaluated by the rule
              engine, checked against watchlists, and — when necessary — create
              alerts for your compliance workflows.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              Key Concepts
            </h2>
            <ul className="list-disc pl-6 mb-4 leading-relaxed">
              <li>
                <strong>Validation:</strong> Incoming payloads are validated
                server-side. Invalid payloads return <code>400</code> with a
                human-readable message.
              </li>
              <li>
                <strong>Authentication:</strong> Hybrid auth is supported — use
                a Bearer JWT or an <code>x-api-key</code> header.
              </li>
              <li>
                <strong>Rate limiting:</strong> API requests pass through a
                rate-limiter to protect the service and your org.
              </li>
              <li>
                <strong>Rule evaluation &amp; watchlist:</strong> Transactions
                are checked against organization-specific rules and watchlists
                and flagged when matches occur.
              </li>
              <li>
                <strong>Audit logs:</strong> All significant operations (e.g.
                transaction creation, flagging, rule changes) are logged using
                the audit logger to support compliance and troubleshooting.
              </li>
              <li>
                <strong>Notifications:</strong> When a transaction is flagged we
                create alerts and send notifications asynchronously. In addition
                to in-app notifications, flagged transactions can also be
                forwarded to external systems via integrations. For more
                details, see the{" "}
                <Link
                  to="/docs/integrations/"
                  className="text-blue-600 hover:underline"
                >
                  Integrations documentation
                </Link>
                .
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              Sending Transactions via API
            </h2>
            <p className="mb-4 leading-relaxed">
              You can feed transactions into Regulus through the{" "}
              <code>/transactions </code>
              endpoints. Refer to the official API documentation for full
              details on request structure, authentication, and response
              formats:
            </p>
            <Link
              to="/docs/api-docs/transactions-api/"
              className="text-blue-600 hover:underline"
            >
              Regulus Transactions API Documentation
            </Link>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              Using the SDK
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

            <p className="my-2 leading-relaxed">
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

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              What happens after a transaction is received?
            </h2>
            <ol className="list-decimal pl-6 mb-4 leading-relaxed">
              <li>
                <strong>Validation:</strong> The request payload is validated.
                If invalid, an HTTP <code>400</code> with the validation message
                is returned and the error is logged.
              </li>
              <li>
                <strong>Watchlist check:</strong> The transaction is checked
                against organization watchlists (user IDs, countries, etc.).
              </li>
              <li>
                <strong>Rule evaluation:</strong> Organization rules are fetched
                and evaluated. The rule engine returns whether the transaction
                was flagged, along with matched rule details.
              </li>
              <li>
                <strong>Persistence:</strong> The transaction and flagged
                metadata are stored in the database inside a single
                transactional operation.
              </li>
              <li>
                <strong>Alerts:</strong> If flagged, one or more alert records
                are created and an audit entry is written describing the action
                (<code>Transaction Flagged: &lt;txn_id&gt;</code>).
              </li>
              <li>
                <strong>Notifications:</strong> Notifications are dispatched
                asynchronously for each matched rule.
              </li>
            </ol>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              Error handling &amp; observability
            </h2>
            <p className="mb-3 leading-relaxed">
              Errors at every stage (validation, DB, rule evaluation,
              notification) are logged using the central <code>logger</code>.
              Critical actions and security-relevant changes are written to the
              audit logs via
              <code> logAudit</code>. Typical responses include:
            </p>
            <ul className="list-disc pl-6 mb-4 leading-relaxed">
              <li>
                <code>400</code> — validation error (payload malformed)
              </li>
              <li>
                <code>401</code> — unauthorized (invalid/missing token)
              </li>
              <li>
                <code>403</code> — forbidden (invalid organization or
                insufficient permissions)
              </li>
              <li>
                <code>409</code> — conflict (transaction_id already exists)
              </li>
              <li>
                <code>429</code> — too many requests (rate limiting)
              </li>
              <li>
                <code>500</code> — internal server error (logged with stack)
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              Troubleshooting tips
            </h2>
            <ul className="list-disc pl-6 mb-6 leading-relaxed">
              <li>
                If you receive a <code>409</code>, confirm the {" "}
                <code>transaction_id</code> isn't duplicated — transaction IDs
                must be unique per organization.
              </li>
              <li>
                For validation errors, check types and timestamp format (ISO
                8601).
              </li>
              <li>
                If alerts are not triggering, verify that your organization has
                rules configured and that rule fields/operators match the
                transaction payload keys.
              </li>
              <li>
                Check application logs for entries from <code>logger</code> and
                audit entries from <code>logAudit</code> for details about why a
                transaction was flagged or why an operation failed.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </DocLayout>
  )
}

export default TransactionMonitoring
