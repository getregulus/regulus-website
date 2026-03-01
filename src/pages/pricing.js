import React from "react"
import Layout from "@components/layout"
import Seo from "@components/seo"

import Hero from "@components/hero"
import Toggle from "@components/toggle"

const toggleOptions = [
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
        "Setting Up Alerts & Audit Logging",
        "RBAC",
        "Discord Community Support",
      ],
      button: {
        text: "Installation On GitHub",
        link: "https://github.com/getregulus/",
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
        trackingCategory="Pricing Page"
      />

    </main>
  </Layout>
)

export default PricingPage
