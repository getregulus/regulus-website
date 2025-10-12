import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import { Link } from "gatsby"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Core Features", href: "/docs/core-features" },
  { label: "Audit Logs" },
]

const AuditLogs = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Audit Logs | Regulus Documentation"
        description="Audit Logs in Regulus provide internal accountability by tracking user actions within the platform. Learn how to review and export audit logs for compliance and transparency."
        keywords={[
          "Audit Logs",
          "Internal Audit",
          "User Actions",
          "Compliance",
          "Transaction Monitoring",
          "Regulus Documentation",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/core-features/audit-logs"
        />
      </Seo>

      <main className="flex-grow">
        <section className="py-4">
          <div className="max-w-7xl mx-auto text-gray-700">
            <h1 className="text-gray-800 text-2xl sm:text-3xl font-medium mb-4">
              Audit Logs
            </h1>

            <p className="mb-4 leading-relaxed">
              Audit logs in Regulus provide a detailed record of all important
              user actions within your organization. These logs enable internal
              accountability, compliance tracking, and security auditing by
              storing who performed an action and when it occurred.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              What Audit Logs Record
            </h2>
            <p className="mb-4 leading-relaxed">
              Each audit log entry typically contains:
            </p>
            <ul className="list-disc pl-6 mb-4 leading-relaxed">
              <li>
                <strong>User ID:</strong> The user who performed the action.
              </li>
              <li>
                <strong>Action:</strong> A description of the action taken
                (e.g., "Exported 17 alerts as CSV").
              </li>
              <li>
                <strong>Timestamp:</strong> The date and time when the action
                occurred.
              </li>
              <li>
                <strong>Organization ID:</strong> The organization under which
                the action was performed.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              How Audit Logs Are Created
            </h2>
            <p className="mb-4 leading-relaxed">
              Audit logs are generated using the <code>logAudit</code> utility,
              which is called whenever a significant user action occurs within
              the platform. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 leading-relaxed">
              <li>Exporting alerts or reports.</li>
              <li>Creating, updating, or deleting rules.</li>
              <li>Processing transactions or flagging activity.</li>
              <li>Other administrative or compliance-related actions.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              Viewing Audit Logs
            </h2>
            <p className="mb-4 leading-relaxed">
              Audit logs can be retrieved via the API or viewed within your
              organization's dashboard. Entries are ordered by timestamp, with
              the most recent actions appearing first.
            </p>
            <p className="mb-4 leading-relaxed">Example of a log entry:</p>
            <table className="table-auto border-collapse border border-gray-200 mb-4 text-left min-w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-sm font-medium text-gray-600 uppercase">
                  <th className="border px-2 py-1">ID</th>
                  <th className="border px-2 py-1">User ID</th>
                  <th className="border px-2 py-1">Action</th>
                  <th className="border px-2 py-1">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-left text-sm text-gray-600 font-normal">
                  <td className="border px-2 py-1">40</td>
                  <td className="border px-2 py-1">3</td>
                  <td className="border px-2 py-1">
                    Exported 17 alerts as CSV
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    10/10/2025, 3:17:37 PM
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
              Best Practices
            </h2>
            <ul className="list-disc pl-6 mb-6 leading-relaxed">
              <li>
                Regularly review audit logs to ensure accountability and detect
                unauthorized actions.
              </li>
              <li>
                Use exports for compliance audits or internal security reviews.
              </li>
              <li>
                Maintain logs securely and limit access to authorized personnel
                only.
              </li>
              <li>
                Include the organization and user context when analyzing logs
                for traceability.
              </li>
            </ul>

            <p className="mb-4 leading-relaxed">
              To see related actions that generate audit logs, refer to the{" "}
              <Link
                to="/docs/api-docs/audit-api/"
                className="text-blue-600 hover:underline"
              >
                Audit API Documentation
              </Link>{" "}
              and transaction handling sections.
            </p>
          </div>
        </section>
      </main>
    </DocLayout>
  )
}

export default AuditLogs
