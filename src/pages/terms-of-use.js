import React from "react"
import Layout from "@components/layout"
import Seo from "@components/seo"

const TermsOfUse = () => {
  return (
    <Layout>
      <Seo
        title="Terms of Use"
        description="Regulus Terms of Use - Read our terms and conditions for using the Regulus platform and services."
      />
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-gray-900 text-3xl sm:text-4xl font-bold mb-6">
          Terms of Use
        </h1>
        <p className="text-gray-700 text-base mb-6">
          Welcome to Regulus! By accessing our website at
          <a
            href="https://getregulus.com"
            className="text-blue-500 hover:underline"
          >
            {" "}
            https://getregulus.com
          </a>
          , you agree to these terms and conditions.
        </p>

        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-8">
          License
        </h2>
        <p className="text-gray-700 text-base mb-6">
          Unless otherwise stated, Regulus and/or its licensors own the
          intellectual property rights for all material on Regulus. All rights
          are reserved for personal use only under the following restrictions:
        </p>
        <ul className="list-disc pl-5 text-gray-700 text-base mb-6">
          <li>You may not republish material from Regulus.</li>
          <li>You may not sell, rent, or sub-license material from Regulus.</li>
          <li>
            You may not reproduce, duplicate, or copy material from Regulus.
          </li>
          <li>You may not redistribute content from Regulus.</li>
        </ul>

        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-8">
          Cookies
        </h2>
        <p className="text-gray-700 text-base mb-6">
          Regulus uses cookies to enhance user experience. By accessing our
          website, you agree to our use of cookies as outlined in our
          <a href="/privacy-policy" className="text-blue-500 hover:underline">
            {" "}
            Privacy Policy
          </a>
          .
        </p>

        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-8">
          User Content
        </h2>
        <p className="text-gray-700 text-base mb-6">
          Users may post content in certain areas of our website. Regulus does
          not pre-screen content but reserves the right to remove any content
          deemed inappropriate, offensive, or in violation of these Terms.
        </p>

        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-8">
          Hyperlinking
        </h2>
        <p className="text-gray-700 text-base mb-6">
          Certain organizations, including government agencies, search engines,
          and news organizations, may link to our website without prior
          approval. Other entities may request linking permissions, subject to
          review.
        </p>

        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-8">
          Disclaimer
        </h2>
        <p className="text-gray-700 text-base mb-6">
          Regulus is provided for security and compliance monitoring in Web3
          applications. Users are responsible for ensuring ethical use and
          compliance with applicable laws. We do not assume responsibility for
          misuse or unauthorized access facilitated by our platform.
        </p>
      </section>
    </Layout>
  )
}

export default TermsOfUse
