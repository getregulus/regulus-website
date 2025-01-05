import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ComingSoon = () => {
  return (
    <Layout>
      <main className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-700 mb-4">
            Regulus Cloud is Coming Soon!
          </h1>
          <p className="text-gray-50 mb-6">
            We are working hard to bring you something amazing! Stay tuned for
            updates and launch news.
          </p>
          <Link
            to="/"
            className="bg-blue-400 text-white px-8 py-3 rounded-3xl shadow-lg hover:bg-blue-500 transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </main>
    </Layout>
  )
}
export const Head = () => <Seo title="Coming Soon" />

export default ComingSoon
