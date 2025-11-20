import React from "react"
import { Link } from "gatsby"
import Layout from "@components/layout"
import Seo from "@components/seo"
import AuthorInfo from "@components/author-info"

const BlogPost = () => {
  const post = {
    title:
      "Why 'Audited' Doesn't Mean 'Safe': The Case for Real-Time Monitoring",
    author: "Liam Chen",
    date: "November 20, 2025",
    readTime: "10 min read",
    tags: ["Security", "Audits", "Monitoring", "Blockchain", "Risk", "Hacks"],
  }

  return (
    <Layout>
      <Seo
        title={post.title}
        description="Smart contract audits are just the first step. Learn why real-time transaction monitoring and circuit breakers are the missing pieces in your Web3 security stack."
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
            It is a story we see too often in our industry. A protocol launches
            with a "100% Secure" badge, flaunting audits from three top-tier
            firms. Two months later, a logic loophole is exploited, and the
            treasury is drained.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Here is the uncomfortable truth:</strong> Audits are a
            snapshot in time. They verify your code before deployment, but they
            cannot predict how the ecosystem interacts with your contract{" "}
            <em>after</em> launch. They cannot predict oracle manipulation,
            bridge exploits, or private key compromises.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            The Anatomy of a Hack
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most hacks are not instantaneous. They follow a pattern that, if
            observed, can be stopped.
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-6">
            <li>
              <strong>The Probe:</strong> The attacker sends small, low-value
              transactions to test a vulnerability.
            </li>
            <li>
              <strong>The Setup:</strong> They might fund a fresh wallet using a
              mixer like Tornado Cash.
            </li>
            <li>
              <strong>The Execution:</strong> A massive flash loan is taken out
              to manipulate a price oracle.
            </li>
            <li>
              <strong>The Drain:</strong> Funds are siphoned out.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-6">
            Without real-time monitoring, you only notice step #4—when your
            users start screaming on X. With monitoring, you can catch step #1
            or #2.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            The Concept of "Circuit Breakers"
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In traditional finance, if the S&P 500 drops too fast, trading halts
            automatically. DeFi needs the same mechanism.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            By implementing a monitoring tool, you can create specific{" "}
            <strong>Alert Rules</strong>. For example:
            <br />
            <em>
              "If the contract withdraws more than 10% of TVL within 1 hour --
              Trigger Critical Alert."
            </em>
            <br />
            Advanced teams take this further by automating a "Pause" function on
            their smart contracts if a high-severity alert is triggered by their
            monitoring system.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            Moving from Reactive to Proactive with Regulus
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            You need a security camera, not just a lock on the door.{" "}
            <a
              href="https://getregulus.co"
              className="text-blue-600 hover:underline"
            >
              Regulus
            </a>{" "}
            allows teams to define these specific "red flag" parameters. Whether
            it's detecting an interaction with a sanctioned entity or spotting a
            flash loan attack in progress, Regulus acts as the always-on
            guardian that watches the chain so you don't have to.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
            <p className="text-gray-800 font-medium">
              <strong>Pro Tip:</strong> Don't wait for a hack to think about
              monitoring. The cost of a tool like Regulus is a fraction of the
              cost of a single exploit.
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
