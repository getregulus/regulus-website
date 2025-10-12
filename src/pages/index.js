import React from "react"
import Layout from "@components/layout"
import Seo from "@components/seo"

import Hero from "@components/hero"
import Features from "@components/features"
import Deployments from "@components/deployments"

const IndexPage = () => (
  <Layout>
    <Seo
      title="The AI Watchdog for Web3 Transactions."
      description="Advanced monitoring solutions work seamlessly in the
        background, detecting and alerting suspicious activities so you can
        focus on driving innovation and growth."
    />
    <main className="flex-grow">
      <Hero
        title={"Ensure Compliance, Build Trust"}
        subtitle={
          "Advanced monitoring solutions work seamlessly in the background, detecting and alerting suspicious activities so you can focus on driving innovation and growth."
        }
      />
      <Features />
      <Deployments />
    </main>
  </Layout>
)

export default IndexPage
