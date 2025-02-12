import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "@components/navbar"
import Footer from "@components/footer"
import Menu from "@components/menu"
import Breadcrumb from "@components/breadcrumb"

const DocLayout = ({ children, breadcrumbPath }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Menu items for the documentation sidebar
  const menuItems = [
    { label: "What is Regulus?", href: "/docs" },
    {
      label: "Getting Started",
      href: "/docs/getting-started/",
      children: [
        { label: "Organizations", href: "/docs/getting-started/organizations" },
        { label: "No-Code Workflow Builder", href: "/docs/getting-started/workflow-builder" },
      ],
    },
    {
      label: "Self-Hosted",
      href: "/docs/self-hosted",
      children: [
        { label: "Installation", href: "/docs/self-hosted/installation" },
        {
          label: "Upgrading to Enterprise",
          href: "/docs/self-hosted/upgrading-to-self-hosted-enterprise",
        },
        { label: "Troubleshooting", href: "/docs/self-hosted/troubleshooting" },
      ],
    },
    {
      label: "Transaction Monitoring",
      href: "/docs/transaction-monitoring",
      children: [
        {
          label: "Feeding Transactions",
          href: "/docs/transaction-monitoring/feeding-transactions",
        },
        {
          label: "Rule Builder",
          href: "/docs/transaction-monitoring/rule-builder",
        },
        {
          label: "Customizable Alerts",
          href: "/docs/transaction-monitoring/customizable-alerts",
        },
        {
          label: "Audit Logs",
          href: "/docs/transaction-monitoring/audit-logs",
        },
        {
          label: "Watchlists",
          href: "/docs/transaction-monitoring/watchlists",
        },
      ],
    },
    {
      label: "API Documentation",
      href: "/docs/api-docs",
      children: [
        { label: "Authentication API", href: "/docs/api-docs/auth-api" },
        {
          label: "Organizations API",
          href: "/docs/api-docs/organizations-api",
        },
        { label: "Transactions API", href: "/docs/api-docs/transactions-api" },
        { label: "Rules API", href: "/docs/api-docs/rules-api" },
        { label: "Alerts API", href: "/docs/api-docs/alerts-api" },
        { label: "Audit API", href: "/docs/api-docs/audit-api" },
        { label: "Watchlist API", href: "/docs/api-docs/watchlist-api" },
      ],
    },
  ]

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Sidebar Menu */}
          <aside className="lg:w-1/4 mb-8 lg:mb-0">
            <Menu items={menuItems} />
          </aside>
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Breadcrumb */}
            {breadcrumbPath && <Breadcrumb path={breadcrumbPath} />}
            <main>{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DocLayout
