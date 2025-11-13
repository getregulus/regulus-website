import React from "react"
import { Link } from "gatsby"
import Layout from "@components/layout"
import Seo from "@components/seo"
import AuthorInfo from "@components/author-info"

const BlogPost = () => {
  const post = {
    title: "The Future of Cross-Border Payments with DeFi and Regulatory Oversight",
    author: "Aylin Gorgun",
    date: "November 13, 2025",
    readTime: "8 min read",
    tags: ["Cross-border payments", "DeFi", "Regulations", "FinTech", "Global Finance"],
  }

  return (
    <Layout>
      <Seo
        title={post.title}
        description="Explore how DeFi is reshaping cross-border payments while global regulators push for transparency, compliance, and financial stability in digital finance."
      />

      <article className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <AuthorInfo name={post.author} date={post.date} />
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Cross-border payments have long been the backbone of global trade, but traditional systems are slow, expensive, and often inaccessible. DeFi (Decentralized Finance) is introducing a new paradigm one where capital moves seamlessly across borders, powered by blockchain transparency and smart contract automation.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            The Promise of DeFi in Global Transactions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            DeFi protocols eliminate intermediaries, enabling instant, low-cost settlements. Stablecoins like USDC and tokenized assets are reducing currency conversion friction, while liquidity pools allow for continuous global access to capital. For startups and SMEs, this democratizes participation in international finance without relying on legacy banks.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            The Rising Role of Regulatory Oversight
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As DeFi grows, regulators are stepping in to address money laundering risks, illicit flows, and consumer protection gaps. Organizations like the FATF and European Commission are actively defining frameworks for AML/KYC in decentralized environments. For builders, this introduces both complexity and opportunity, compliance by design is becoming a differentiator.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
            Key Trends Shaping the Future:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Stablecoin regulation aligning with traditional payment laws</li>
            <li>On-chain identity standards enabling global KYC interoperability</li>
            <li>RegTech solutions automating AML monitoring for DeFi protocols</li>
            <li>Institutional-grade DeFi bridging traditional finance (TradFi)</li>
            <li>Real-time transaction screening to meet global compliance rules</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            Striking the Balance Between Innovation and Compliance
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The challenge for founders lies in maintaining agility while satisfying global compliance expectations. Manual compliance processes are not scalable, automation is the only viable path forward. With AI-driven monitoring tools, projects can proactively detect suspicious behavior, automate risk scoring, and stay aligned with regulatory updates without slowing innovation.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <p className="text-gray-800 font-medium">
              Regulus helps Web3 projects like yours automate compliance for cross-border transactions. Detect risks in real time and stay ahead of evolving regulations, so you can focus on building the future of finance.
            </p>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPost
