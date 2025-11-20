import React from "react"
import { Link } from "gatsby"
import Layout from "@components/layout"
import Seo from "@components/seo"
import AuthorInfo from "@components/author-info"

const BlogPost = () => {
  const post = {
    title: "What VCs Look for in Web3 Compliance Stacks (2025 Edition)",
    author: "Arda Gozupek",
    date: "November 20, 2025",
    readTime: "9 min read",
    tags: [
      "VC",
      "Funding",
      "Institutional DeFi",
      "Risk Management",
      "Due Diligence",
    ],
  }

  return (
    <Layout>
      <Seo
        title={post.title}
        description="Want to attract institutional investors? Discover why a robust compliance and monitoring stack is the new requirement for Web3 funding."
      />

      <article className="max-w-4xl mx-auto p-6">
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

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            The era of "wild west" DeFi investing is over. As we move through
            2025, Venture Capitalists and Institutional LPs (Liquidity
            Providers) are becoming increasingly sophisticated. They aren't just
            looking for high APY anymore; they are looking for{" "}
            <strong>sustainability</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            One of the first questions in due diligence is now:{" "}
            <em>
              "How do you prevent illicit funds from entering your protocol?"
            </em>{" "}
            If your answer is a blank stare or "we are decentralized," the
            meeting is effectively over.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            The 3 Pillars of Institutional Due Diligence
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When a VC assesses your "Compliance Tech Stack," they look for three
            things:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
            <li>
              <strong>Source of Funds (KYT/TFR):</strong> Do you Know Your
              Transaction? Under the EU's{" "}
              <strong>Transfer of Funds Regulation (TFR)</strong>, you must be
              able to trace beneficiary information. Can you prove your TVL
              isn't derived from the Lazarus Group?
            </li>
            <li>
              <strong>Sanctions Screening:</strong> Do you have a mechanism to
              block addresses listed on OFAC (US) or UN sanction lists?
            </li>
            <li>
              <strong>Ongoing Monitoring:</strong> Compliance isn't a one-time
              KYC check at onboarding. It is the continuous monitoring of wallet
              behavior.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            Why "Decentralized" Can't Be an Excuse
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Investors know that if your protocol inadvertently processes funds
            from a major hack, the legal fallout could wipe out their equity.
            Furthermore, institutions often have their own LP mandates
            preventing them from interacting with "tainted" pools. If you can't
            guarantee a clean pool, you can't take their money.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            Turning Compliance into a Fundraising Asset
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Smart founders are flipping the script. Instead of hiding their
            compliance measures, they put them on Slide 4 of their pitch deck.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Showing that you utilize a third-party monitoring layer like{" "}
            <a
              href="https://getregulus.co"
              className="text-blue-600 hover:underline"
            >
              Regulus
            </a>{" "}
            demonstrates maturity. It proves you aren't grading your own
            homework. It signals to investors that your infrastructure is
            enterprise-grade, risk-managed, and ready for scale.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <p className="text-gray-800 font-medium">
              <strong>Ready to upgrade your deck?</strong> Regulus gives you the
              institutional-grade monitoring features that VCs demand, without
              the enterprise price tag.
            </p>
          </div>
        </div>

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
