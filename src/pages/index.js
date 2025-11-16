import React from "react"
import Layout from "@components/layout"
import Seo from "@components/seo"

import Hero from "@components/hero"
import Features from "@components/features"
import Deployments from "@components/deployments"

const IndexPage = () => (
  <Layout>
    <Seo
      title="The AI Watchdog for Web3 Transactions"
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
      
      {/* Demo Video Section */}
      <section className="pb-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full max-w-5xl mx-auto overflow-hidden shadow-xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto"
            >
              <source src="/videos/Regulus.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <Features />
      <Deployments />
    </main>
  </Layout>
)

export default IndexPage
