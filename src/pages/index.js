import React from "react"
import Layout from "../components/layout"

import Hero from "../components/hero"
import Features from "../components/features"
import Deployments from "../components/deployments"

const IndexPage = () => (
  <Layout>
    <main className="flex-grow">
      <Hero />
      <Features />
      <Deployments />
    </main>
  </Layout>
)

export default IndexPage
