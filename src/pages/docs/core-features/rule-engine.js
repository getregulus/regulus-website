import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import { Link } from "gatsby"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Core Features", href: "/docs/core-features" },
  { label: "Rule Engine" },
]

const RuleEngine = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Rules Engine Overview | Regulus Documentation"
        description="Learn how to define, manage, and evaluate transaction rules with the Regulus Rule Engine. Set conditions, use operators, and flag transactions for monitoring."
        keywords={[
          "Regulus Rules Engine",
          "Transaction Monitoring",
          "Web3 Rules",
          "Rule Evaluation",
          "API Rules",
          "Alerts",
        ]}
      />

      <main className="flex-grow">
        <section className="py-4">
          <div className="mx-auto text-gray-700">
            {/* Title */}
            <h1 className="text-gray-800 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              Rules Engine Overview
            </h1>

            {/* Intro Paragraph */}
            <p className="text-base mb-6 leading-relaxed">
              The <strong>Regulus Rule Engine</strong> allows you to define
              conditions for transactions and automatically flag any that match
              suspicious patterns. Use it to monitor transaction thresholds,
              currency rules, user IDs, and more.
            </p>

            {/* Step 1 */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              1. Rule Structure
            </h2>
            <p className="mb-4 leading-relaxed">
              Each rule is composed of a <strong>field</strong>, an{" "}
              <strong>operator</strong>, and a <strong>value</strong>. When a
              transaction matches the condition, it is flagged.
            </p>
            <pre className="bg-gray-900 text-gray-100 text-sm rounded-lg p-4 overflow-x-auto">
              {`{
  "rule_name": "High Value Transactions",
  "field": "amount",
  "operator": "GREATER_THAN",
  "value": "100000"
}`}
            </pre>

            {/* Step 2 */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              2. Supported Operators
            </h2>
            <p className="mb-4 leading-relaxed">
              The following operators can be used in rules:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>GREATER_THAN</strong> – checks if the field is greater
                than the value
              </li>
              <li>
                <strong>LESS_THAN</strong> – checks if the field is less than
                the value
              </li>
              <li>
                <strong>GREATER_THAN_OR_EQUAL</strong> – checks if the field is
                greater than or equal to the value
              </li>
              <li>
                <strong>LESS_THAN_OR_EQUAL</strong> – checks if the field is
                less than or equal to the value
              </li>
              <li>
                <strong>EQUAL</strong> – checks if the field equals the value
              </li>
              <li>
                <strong>NOT_EQUAL</strong> – checks if the field does not equal
                the value
              </li>
              <li>
                <strong>IN</strong> – checks if the field is included in a list
                of values
              </li>
            </ul>

            {/* Step 3 */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              3. Evaluating Transactions
            </h2>
            <p className="mb-4 leading-relaxed">
              Transactions are evaluated against all rules in your organization.
              If a transaction matches a rule, it is flagged and the matching
              rule name is returned.
            </p>
            <pre className="bg-gray-900 text-gray-100 text-sm rounded-lg p-4 overflow-x-auto">
              {`const { evaluateTransaction } = require('regulus-rule-engine');

const transaction = {
  transaction_id: "txn_12345",
  user_id: "user_001",
  amount: 150000,
  currency: "USD",
  country: "US",
  timestamp: new Date().toISOString(),
};

const rules = [
  {
    id: 1,
    rule_name: "High Value Transactions",
    field: "amount",
    operator: "GREATER_THAN",
    value: "100000",
  },
];

const result = evaluateTransaction(transaction, rules);
console.log(result);
/*
{
  flagged: true,
  reasons: ["High Value Transactions"],
  matchedRules: [ { ...ruleObject } ]
}
*/`}
            </pre>

            {/* Step 4 */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              4. Error Handling
            </h2>
            <p className="mb-4 leading-relaxed">
              If a rule references a non-existent field or an invalid operator,
              the engine will throw a <code>ValidationError</code>. All errors
              are logged for debugging.
            </p>

            {/* Step 5 */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              5. Managing Rules via API
            </h2>
            <p className="mb-4 leading-relaxed">
              You can manage rules using the <code>/rules</code> endpoints.
              Refer to the official API documentation for full details and
              examples:
            </p>
            <Link
              to="/docs/api-docs/rules-api/"
              className="text-blue-600 hover:underline"
            >
              Regulus Rules API Documentation
            </Link>

            {/* Step 6 */}
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              6. Logging & Monitoring
            </h2>
            <p className="mb-8 leading-relaxed">
              Audit logs ensure user accountability and help track rule changes
              over time, supporting compliance and internal monitoring.
            </p>
          </div>
        </section>
      </main>
    </DocLayout>
  )
}

export default RuleEngine
