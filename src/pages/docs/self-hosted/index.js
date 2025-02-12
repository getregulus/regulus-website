import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import { Link } from "gatsby"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Self Hosted" },
]

const SelfHosted = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Self-Hosted Setup"
        description="Learn how to set up the self-hosted version of Regulus. Follow this guide to install, configure, and deploy Regulus on your infrastructure."
        keywords={[
          "Self-Hosted Regulus",
          "Self-Hosted Setup",
          "Regulus Deployment",
          "Blockchain Monitoring Setup",
          "Regulus Installation",
          "Regulus Documentation",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/self-hosted/"
        />
      </Seo>

      <main className="flex-grow">
        <section className="py-4">
          <div className="max-w-7xl mx-auto">
            {/* Main Title */}
            <h1 className="text-gray-800 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              Self-Hosted Regulus Platform
            </h1>

            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              The Regulus Platform offers unparalleled security and monitoring
              capabilities for Web3 transactions. It is available in two
              configurations:
            </p>
            <ul className="list-disc list-inside space-y-4 mb-6">
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">Cloud:</span>{" "}
                Hosted on Regulus servers (available at{" "}
                <Link
                  className="text-blue-500"
                  to="https://app.getregulus.co/login"
                >
                  here
                </Link>
                )
              </li>
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Self-Hosted:
                </span>{" "}
                Hosted on your infrastructure (installation at{" "}
                <Link
                  className="text-blue-500"
                  to="https://github.com/getregulus"
                >
                  here
                </Link>
                )
              </li>
            </ul>

            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-8">
              Overview
            </h2>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              The Self-Hosted version of Regulus is designed for organizations
              requiring complete control over their monitoring infrastructure.
              This solution offers the same powerful features as the
              cloud-hosted version but allows you to deploy and manage it within
              your own infrastructure, enabling enhanced customization,
              security, and compliance.
            </p>

            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-8">
              Features
            </h2>
            <ul className="list-disc list-inside space-y-4 mb-6">
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Broad Compatibility:
                </span>{" "}
                Supports Arm64 and Amd64 architectures for Linux and macOS
                environments.
              </li>
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Containerized Deployment:
                </span>{" "}
                Fully Dockerized to simplify setup and reduce dependency
                management overhead.
              </li>
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">Easy Setup:</span>{" "}
                Automated installation with Docker Compose for seamless
                deployment.
              </li>
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Real-Time Monitoring:
                </span>{" "}
                Advanced monitoring with the Regulus Agent, including real-time
                audit logs and transaction tracking.
              </li>

              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Enhanced Security:
                </span>{" "}
                Built-in tools for suspicious activity detection and compliance
                enforcement.
              </li>
            </ul>

            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-8">
              Editions
            </h2>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              The Regulus Self-Hosted Platform is available in two editions:
            </p>
            <ul className="list-disc list-inside space-y-4 mb-6">
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Community Edition:
                </span>{" "}
                Ideal for small teams or pilot projects, including essential
                monitoring features.
              </li>
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Enterprise Edition:
                </span>{" "}
                Designed for large-scale needs, with distributed mode for
                performance optimization and additional customization options.
              </li>
            </ul>

            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              For a detailed comparison between the editions, refer to our{" "}
              <Link
                to="https://getregulus.co/pricing/"
                className="text-blue-600 underline"
              >
                Editions Comparison
              </Link>
              .
            </p>

            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-8">
              Deployment Options
            </h2>
            <ul className="list-disc list-inside space-y-4 mb-6">
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  On-Premises Deployment:
                </span>{" "}
                For environments requiring complete isolation.
              </li>
              <li className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">
                  Cloud-Based Deployment:
                </span>{" "}
                Compatible with major providers, including AWS, Azure, and
                Google Cloud.
              </li>
            </ul>

            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              Ready to deploy Regulus Self-Hosted? Get started by following the{" "}
              <Link
                to="https://getregulus.co/docs/self-hosted/installation/"
                className="text-blue-600 underline"
              >
                Installation Guide
              </Link>
              . For additional assistance, contact our support team.
            </p>
          </div>
        </section>
      </main>
    </DocLayout>
  )
}

export default SelfHosted
