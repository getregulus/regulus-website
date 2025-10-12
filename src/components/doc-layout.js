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
        {
          label: "Setup Overview",
          href: "/docs/getting-started/setup-overview",
        },
      ],
    },
    {
      label: "Self-Hosted",
      href: "/docs/self-hosted",
      children: [
        { label: "Installation", href: "/docs/self-hosted/installation" },
      ],
    },
    {
      label: "Core Features",
      href: "/docs/core-features",
      children: [
        {
          label: "Transaction Monitoring",
          href: "/docs/core-features/transaction-monitoring",
        },
        {
          label: "Rule Engine",
          href: "/docs/core-features/rule-engine",
        },
        {
          label: "Flag Alerts",
          href: "/docs/core-features/flag-alerts",
        },
        {
          label: "Audit Logs",
          href: "/docs/core-features/audit-logs",
        },
      ],
    },
    {
      label: "Intelligence Agents",
      href: "/docs/intelligence-agents",
      children: [],
    },
    {
      label: "Integrations",
      href: "/docs/integrations",
      children: [],
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
