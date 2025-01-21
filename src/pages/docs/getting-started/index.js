import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"
import { Link } from "gatsby"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Getting Started" },
]

const GettingStarted = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Getting Started"
        description="Get started with Regulus. Learn how to set up your environment, configure blockchain monitoring, and explore key features."
        keywords={[
          "Getting Started",
          "Regulus Setup",
          "Blockchain Monitoring Setup",
          "Regulus Features",
          "Blockchain Integration",
          "Regulus Documentation",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/getting-started"
        />
      </Seo>

      <main className="flex-grow">
        <section className="py-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-800 text-2xl sm:text-3xl font-medium mb-6 leading-relaxed">
              Getting Started
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-8">
              Welcome to Regulus! Follow this guide to set up and start
              monitoring blockchain transactions with ease. This section
              provides steps for both self-hosted and cloud-hosted versions of
              Regulus. Choose the method that best suits your needs.
            </p>
            {/* Self-Hosted Section */}
            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-6">
              Self-Hosted Version (Dockerized)
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              The Dockerized setup is the recommended method for deploying
              Regulus, providing a streamlined and consistent installation
              experience. Follow these steps:
            </p>
            To view a step-by-step setup, visit the{" "}
            <Link
              to="/docs/self-hosted/installation/"
              className="text-blue-600 hover:underline"
            >
              Installation Guide
            </Link>
            .{/* Cloud Version Section */}
            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium my-6">
              Cloud Version
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              The cloud-hosted version of Regulus is a managed solution,
              providing scalability and minimal setup effort. It is ideal for
              teams and organizations looking to start quickly without worrying
              about infrastructure management.
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-8">
              <li>
                <strong>Create an Account:</strong> Sign up on the
                <a
                  href="https://app.getregulus.co/login"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {" "}
                  Regulus Cloud Portal
                </a>{" "}
                to get started.
              </li>
              <li>
                <strong>Log In:</strong> Use your credentials to access the
                intuitive Regulus dashboard.
              </li>
              <li>
                <strong>Set Up Monitoring:</strong> Define monitoring rules
                tailored to your operational needs.
              </li>
              <li>
                <strong>Invite Team Members:</strong> Enable collaboration by
                inviting your team to your workspace. Assign roles and manage
                permissions as needed.
              </li>
              <li>
                <strong>Create System Maps and Integrations:</strong> Define
                monitoring rules tailored to your operational needs. Set up
                integrations with tools and services to extend functionality.
              </li>
            </ol>
          </div>
          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700 rounded my-6">
              <strong>Note:</strong> For troubleshooting, visit the
              <a
                href="https://docs.getregulus.co/troubleshooting"
                className="text-blue-600 hover:underline ml-1 underline"
                target="/docs/self-hosted/troubleshooting/"
                rel="noopener noreferrer"
              >
                troubleshooting guide
              </a>
              .
            </div>
          
        </section>
      </main>
    </DocLayout>
  )
}

export default GettingStarted
