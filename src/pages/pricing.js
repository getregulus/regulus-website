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
  cloud: [
    {
      title: "Startup Plan",
      price: "£79/month",
      description: "Affordable cloud hosting",
      features: [
        "Managed Hosting",
        "Transaction Monitoring",
        "Automatic Updates",
        "Custom Rule Creation",
        "Setting Up Alers & Audit Logging",
        "RBAC",
      ],
      button: {
        text: "Get Started",
        link: "https://web.getregulus.co/",
        className:
          "bg-blue-400 shadow-lg hover:bg-blue-500 transition duration-300 text-white py-2 px-4 rounded-md",
      },
    },
    {
      title: "Enterprise Plan",
      price: "",
      description: "For businesses with larger needs",
      features: [
        "All Features From Basic Plan",
        "Custom Integrations",
        "Cross-Chain & Temporal Reasoning",
        "Risk Scoring Engine",
        "Single-Sign On (SSO)",
        "Watchlist Matching",
        "24/7 Enterprise Support",
      ],
      button: {
        text: "Request a Trial",
        link: "https://www.linkedin.com/company/get-regulus/",
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

      <div className="text-center font-bold text-lg -mt-4 pb-10">
        <h2 className="text-gray-700">
          Start your <span className="font-bold">7-day free trial</span> — no
          commitment, cancel anytime.
        </h2>
      </div>
    </main>
  </Layout>
)

export default PricingPage
