import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

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
            <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-8">
              <li>
                <strong>Install Docker and Docker Compose:</strong> Ensure
                Docker and Docker Compose are installed on your machine. Refer
                to the
                <a
                  href="https://docs.docker.com/get-docker/"
                  className="text-blue-600 hover:underline"
                >
                  {" "}
                  Docker installation guide
                </a>
                .
              </li>
              <li>
                <strong>Clone the Repository:</strong> Clone the Regulus
                repository to your local machine:
                <div className="overflow-x-auto my-2 bg-gray-900">
                  <pre className=" text-gray-200 p-4 rounded w-full">
                    <code>
                      git clone https://github.com/getregulus/regulus.git
                    </code>
                  </pre>
                </div>
              </li>
              <li>
                <strong>Configure Environment Variables:</strong> Create a{" "}
                <code>.env</code> file in the root directory with the following
                variables:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>
                    <code>DATABASE_URL</code>: PostgreSQL connection string
                  </li>
                  <li>
                    <code>JWT_SECRET</code>: Secret key for token-based
                    authentication
                  </li>
                  <li>
                    Other settings as specified in the{" "}
                    <a href="" className="text-blue-600 hover:underline">
                      Configuration Guide
                    </a>
                    .
                  </li>
                </ul>
              </li>
              <li>
                <strong>Build and Start the Containers:</strong> Use Docker
                Compose to build and start the containers:
                <div className="overflow-x-auto my-2 bg-gray-900">
                  <pre className=" text-gray-200 p-4 rounded w-full">
                    <code>docker-compose up -d</code>
                  </pre>
                </div>
              </li>
              <li>
                <strong>Run Database Migrations:</strong> Apply database
                migrations to set up the schema:
                <div className="overflow-x-auto my-2 bg-gray-900">
                  <pre className=" text-gray-200 p-4 rounded w-full">
                    <code>
                      docker exec regulus-backend npx prisma migrate deploy
                    </code>
                  </pre>
                </div>
              </li>
              <li>
                <strong>Access the Dashboard:</strong> Open your browser and
                navigate to:
                <div className="overflow-x-auto my-2 bg-gray-900">
                  <pre className=" text-gray-200 p-4 rounded w-full">
                    <code>http://localhost:3000</code>
                  </pre>
                </div>
              </li>
            </ol>

            {/* Cloud Version Section */}
            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-6">
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

            {/* References */}
            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-6">
              References
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <a href="" className="text-blue-600 hover:underline">
                  Authentication
                </a>{" "}
                - Learn how to configure and use token-based authentication.
              </li>
              <li>
                <a href="" className="text-blue-600 hover:underline">
                  API Reference
                </a>{" "}
                - Detailed documentation on Regulus API endpoints.
              </li>
              <li>
                <a href="" className="text-blue-600 hover:underline">
                  Error Handling
                </a>{" "}
                - Guide to debugging and resolving common errors.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </DocLayout>
  )
}

export default GettingStarted
