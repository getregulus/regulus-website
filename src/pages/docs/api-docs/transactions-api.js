import React from "react"
import DocLayout from "../../../components/doc-layout"
import Seo from "../../../components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "API Docs", href: "/docs/api-docs" },
  { label: "Transactions API" },
]

const TransactionsApi = () => {
    return (
      <DocLayout breadcrumbPath={breadcrumbPath}>
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
  
  export default TransactionsApi