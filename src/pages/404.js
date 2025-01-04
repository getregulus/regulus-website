import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">
          404: Page Not Found
        </h1>
        <p className="text-gray-50 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
