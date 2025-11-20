import React from "react"
import { Link } from "gatsby"
import Layout from "@components/layout"
import Seo from "@components/seo"
import AuthorInfo from "@components/author-info"

const BlogIndex = () => {
  const blogPosts = [
    {
      title: "What VCs Look for in Web3 Compliance Stacks (2025 Edition)",
      excerpt:
        "Want to attract institutional investors? Discover why a robust compliance and monitoring stack is the new requirement for Web3 funding.",
      slug: "/blog/what-vcs-look-for-in-web3-complience",
      author: "Arda Gozupek",
      date: "November 20, 2025",
      tags: [
        "VC",
        "Funding",
        "Institutional DeFi",
        "Risk Management",
        "Due Diligence",
      ],
      readTime: "9 min read",
    },
    {
      title:
        "Stop Refreshing Etherscan: How to Automate Your Crypto Operations",
      excerpt:
        "Stop wasting hours on manual transaction checks. Learn how automated monitoring can save your Web3 team time and reduce human error.",
      slug: "/blog/stop-refreshing-etherscan",
      author: "Aylin Gorgun",
      date: "November 20, 2025",
      tags: ["Productivity", "Automation", "Operations", "Scaling", "Workflow"],
      readTime: "8 min read",
    },
    {
      title:
        "Why 'Audited' Doesn't Mean 'Safe': The Case for Real-Time Monitoring",
      excerpt:
        "Smart contract audits are just the first step. Learn why real-time transaction monitoring and circuit breakers are the missing pieces in your Web3 security stack.",
      slug: "/blog/why-audited-doesnt-mean-safe",
      author: "Liam Chen",
      date: "November 20, 2025",
      tags: ["Security", "Audits", "Monitoring", "Blockchain", "Risk", "Hacks"],
      readTime: "10 min read",
    },
    {
      title: "Is Your Web3 Startup Ready for MiCA? A Founder's Survival Guide",
      excerpt:
        "MiCA regulation will shape the future of Web3 startups in the EU. This guide briefly walks founders through key MiCA requirements, compliance steps, and how to avoid pitfalls as you scale your Web3 business.",
      slug: "/blog/regulatory-survival-guide",
      author: "Priya Shah",
      date: "November 20, 2025",
      tags: ["MiCA", "Regulation", "EU", "Compliance", "Web3", "CASP"],
      readTime: "12 min read",
    },
    {
      title:
        "The Future of Cross-Border Payments with DeFi and Regulatory Oversight",
      excerpt:
        "Explore how DeFi is reshaping cross-border payments while global regulators push for transparency, compliance, and financial stability in digital finance.",
      slug: "/blog/the-future-of-cross-border-payments-with-defi-and-regulatory-oversight",
      author: "Aylin Gorgun",
      date: "November 13, 2025",
      tags: [
        "Cross-border payments",
        "DeFi",
        "Regulations",
        "FinTech",
        "Global Finance",
      ],
      readTime: "8 min read",
    },
    {
      title: "How DeFi Startups Can Automate AML Compliance with AI",
      excerpt:
        "Discover how artificial intelligence is revolutionizing Anti-Money Laundering compliance for decentralized finance startups, enabling automated monitoring and real-time risk assessment.",
      slug: "/blog/how-defi-startups-can-automate-aml-compliance-with-ai",
      author: "Alex Moreno",
      date: "October 15, 2025",
      tags: ["DeFi", "AML", "AI", "Compliance", "Startups", "Automation"],
      readTime: "8 min read",
    },
    {
      title:
        "The Role of Blockchain Analytics in Enhancing KYC for Web3 Projects",
      excerpt:
        "Learn how blockchain analytics tools are transforming Know Your Customer processes in Web3, providing deeper insights and fraud detection capabilities for compliance teams.",
      slug: "/blog/the-role-of-blockchain-analytics-in-enhancing-kyc-for-web3-projects",
      author: "Priya Shah",
      date: "October 12, 2025",
      tags: [
        "Blockchain Analytics",
        "KYC",
        "Web3",
        "Fraud Detection",
        "Compliance",
      ],
      readTime: "7 min read",
    },
    {
      title:
        "Navigating Regulatory Challenges for New Decentralized Finance Protocols",
      excerpt:
        "A comprehensive guide to understanding and addressing the complex regulatory landscape facing new DeFi protocols, from licensing requirements to compliance frameworks.",
      slug: "/blog/navigating-regulatory-challenges-for-new-decentralized-finance-protocols",
      author: "Liam Chen",
      date: "October 8, 2025",
      tags: [
        "DeFi Regulations",
        "Compliance",
        "Legal",
        "Blockchain",
        "Protocols",
      ],
      readTime: "10 min read",
    },
  ]

  return (
    <Layout>
      <Seo
        title="Blog - Insights on Web3 Compliance and Blockchain Security"
        description="Stay updated with the latest insights, best practices, and trends in Web3 compliance, blockchain security, and decentralized finance regulations."
      />

      {/* Hero Section */}
      <div className="p-6 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-gray-800 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Regulus Watchtower
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
            Insights, use cases, and compliance intelligence from the frontlines
            of Web3. Stay informed, stay compliant, stay ahead.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                to={post.slug}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                {/* Colored header bar */}
                <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-500"></div>

                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read time */}
                  <p className="text-gray-500 text-xs mb-4">{post.readTime}</p>

                  {/* Author info */}
                  <AuthorInfo name={post.author} date={post.date} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex
