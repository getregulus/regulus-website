import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Transaction Monitoring", href: "/docs/transaction-monitoring" },
  { label: "Customizable Alerts" },
]

const CustomizableAlerts = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Customizable Alerts"
        description="Discover how to create and manage customizable alerts in Regulus. Stay informed about blockchain transactions with tailored alert configurations."
        keywords={[
          "Customizable Alerts",
          "Blockchain Alerts",
          "Transaction Alerts",
          "Alert Management",
          "Regulus Documentation",
          "Blockchain Monitoring",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/transaction-monitoring/customizable-alerts"
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

export default CustomizableAlerts
