import React from "react"
import Layout from "@components/layout"

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-gray-900 text-3xl sm:text-4xl font-bold mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-700 text-base mb-6">
          At Regulus, accessible from{" "}
          <a
            href="https://getregulus.com"
            className="text-blue-500 hover:underline"
          >
            https://getregulus.com
          </a>
          , protecting your privacy is our top priority. This Privacy Policy
          explains how we collect, use, and safeguard your personal information.
        </p>

        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-8">
          Consent
        </h2>
        <p className="text-gray-700 text-base mb-6">
          By using our website, you agree to our Privacy Policy and consent to
          our terms.
        </p>

        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-8">
          Information We Collect
        </h2>
        <p className="text-gray-700 text-base mb-6">
          We only collect essential data to improve our services, including:
        </p>
        <ul className="list-disc pl-5 text-gray-700 text-base mb-6">
          <li>
            Analytics data collected through <strong>Google Analytics</strong>{" "}
            to understand website usage.
          </li>
          <li>
            Information voluntarily provided when contacting us, such as name,
            email, or message content.
          </li>
          <li>
            Log data such as IP address, browser type, and access times, used
            for security and performance monitoring.
          </li>
        </ul>

        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-8">
          How We Use Your Information
        </h2>
        <p className="text-gray-700 text-base mb-6">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-5 text-gray-700 text-base mb-6">
          <li>Monitor and improve website performance.</li>
          <li>Understand user behavior and preferences.</li>
          <li>Enhance security and prevent fraudulent activities.</li>
          <li>Respond to inquiries and communicate updates.</li>
        </ul>

        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-8">
          Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-700 text-base mb-6">
          Regulus uses cookies via <strong>Google Analytics</strong> to analyze
          visitor behavior and enhance user experience. You can manage cookie
          preferences through your browser settings.
        </p>

        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-8">
          Third-Party Services
        </h2>
        <p className="text-gray-700 text-base mb-6">
          We use <strong>Google Analytics</strong> to analyze website traffic
          and improve performance. Google Analytics may collect information such
          as IP addresses and browsing activity. For more details, review{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            Google’s privacy policy
          </a>
          .
        </p>

        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-8">
          Data Protection Rights
        </h2>
        <p className="text-gray-700 text-base mb-6">
          If you are located in the <strong>EU (GDPR)</strong> or{" "}
          <strong>California (CCPA)</strong>, you have rights including:
        </p>
        <ul className="list-disc pl-5 text-gray-700 text-base mb-6">
          <li>Accessing your personal data.</li>
          <li>Requesting correction or deletion of your information.</li>
          <li>
            Opting out of data collection and processing where applicable.
          </li>
        </ul>

        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-8">
          Children’s Privacy
        </h2>
        <p className="text-gray-700 text-base mb-6">
          Regulus does not knowingly collect personal data from children under
          13. If you believe a child has provided personal information, please
          contact us immediately, and we will take appropriate action.
        </p>

        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mt-8">
          Changes to This Policy
        </h2>
        <p className="text-gray-700 text-base mb-6">
          We may update this Privacy Policy periodically. Any changes will be
          posted on this page with the updated date.
        </p>
      </section>
    </Layout>
  )
}

export default PrivacyPolicy
