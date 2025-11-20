import React from "react"
import { Link } from "gatsby"
import Layout from "@components/layout"
import Seo from "@components/seo"
import AuthorInfo from "@components/author-info"

const BlogPost = () => {
  const post = {
    title: "Stop Refreshing Etherscan: How to Automate Your Crypto Operations",
    author: "Aylin Gorgun",
    date: "November 25, 2025",
    readTime: "8 min read",
    tags: ["Productivity", "Automation", "Operations", "Scaling", "Workflow"],
  }

  return (
    <Layout>
      <Seo
        title={post.title}
        description="Stop wasting hours on manual transaction checks. Learn how automated monitoring can save your Web3 team time and reduce human error."
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
            How many tabs of Etherscan do you have open right now? If you are a
            Web3 operations manager or founder, the answer is likely "too many."
            As your startup grows, the volume of transactions—user deposits,
            treasury movements, grant payouts—scales exponentially.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            The Hidden Cost of "Just Checking It Manually"
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In the early days, manually verifying that a deposit isn't coming
            from a sanctioned wallet works. But at 1,000 active users, it
            becomes a bottleneck.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Let's look at the math: If it takes 3 minutes to manually vet a
            large transaction (checking the address, tracing hops, verifying
            source), and you have 20 of these a day, that is{" "}
            <strong>1 hour per day</strong> or <strong>5 hours a week</strong>{" "}
            lost. That is 12% of a work week spent doing something a machine can
            do in milliseconds.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            The Workflow Comparison
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                    Task
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                    The Old Way
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-blue-600 border-b">
                    The Regulus Way
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Checking Wallet Risk</td>
                  <td className="py-3 px-4 border-b">
                    Copy/Paste into free scanner
                  </td>
                  <td className="py-3 px-4 border-b">
                    Automatic background scan
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Alerting Team</td>
                  <td className="py-3 px-4 border-b">Screenshots sent to DM</td>
                  <td className="py-3 px-4 border-b">
                    Real-time Slack/Email webhook
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Audit Trail</td>
                  <td className="py-3 px-4 border-b">
                    Spreadsheet (often outdated)
                  </td>
                  <td className="py-3 px-4 border-b">Immutable digital log</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            Setting Up Your First "Set and Forget" Rule
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Automation doesn't mean losing control; it means gaining focus. The
            most efficient teams set up "Management by Exception."
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            You define a rule in{" "}
            <a
              href="https://getregulus.co"
              className="text-blue-600 hover:underline"
            >
              Regulus
            </a>
            :{" "}
            <em>
              "Notify me ONLY if a transaction exceeds $10,000 AND has a risk
              score above 50."
            </em>
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Now, silence is golden. If your phone isn't buzzing, you know
            operations are safe. You have just reclaimed your time to focus on
            strategy, product, and growth.
          </p>
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
