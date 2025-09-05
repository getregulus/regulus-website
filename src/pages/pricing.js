import React from "react"
import Layout from "@components/layout"
import Seo from "@components/seo"

import Hero from "@components/hero"
import Toggle from "@components/toggle"

const toggleOptions = [
  { key: "cloud", label: "Regulus Cloud" },
  { key: "self-hosted", label: "Self Hosted" },
]

const plansData = {
  "self-hosted": [
    {
      title: "Community Edition",
      price: "Free",
      description: "Start at free",
      features: [
        "Transaction Monitoring",
        "Custom Rule Creation",
        "Setting Up Alers & Audit Logging",
        "RBAC",
        "Discord Community Support",
      ],
      button: {
        text: "Installation On GitHub",
        link: "https://github.com/getregulus/",
      },
    },
  ],
  cloud: [
    {
      title: "Basic Cloud Plan",
      price: "$99/month",
      description: "Affordable cloud hosting",
      features: [
        "Managed Hosting",
        "Automatic Updates",
        "24/7 Cloud Support",
        "Transaction Monitoring",
        "Custom Rule Creation",
        "Setting Up Alers & Audit Logging",
        "RBAC",
      ],
      button: {
        text: "Get Started",
        link: "https://web.getregulus.co/",
      },
    },
    {
      title: "Enterprise Plan",
      price: "$199/month",
      description: "For businesses with larger needs",
      features: [
        "All Features From Basic Plan",
        "Custom Integrations",
        "Single-Sign On (SSO)",
        "Watchlist Matching",
        "24/7 Support",
        "Enterprise Support",
      ],
      button: {
        text: "Request a Trial",
        link: "https://web.getregulus.co/",
      },
    },
  ],
}

const PricingPage = () => (
  <Layout>
    <Seo
      title="Pricing"
      description="Advanced monitoring solutions work seamlessly in the
        background, detecting and alerting suspicious activities so you can
        focus on driving innovation and growth."
    />
    <main className="flex-grow">
      <Hero
        title={"Choose the Plan That Fits Your Needs"}
        subtitle={
          "Explore flexible pricing options designed to grow with your business. Whether you're just starting or scaling your operations, Regulus has a plan tailored for you."
        }
      />
      <Toggle
        toggleOptions={toggleOptions}
        plansData={plansData}
        containerClassName="mb-10"
      />
    </main>
  </Layout>
)

export default PricingPage
