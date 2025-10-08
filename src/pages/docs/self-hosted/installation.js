import React from "react"
import DocLayout from "@components/doc-layout"
import Seo from "@components/seo"

const breadcrumbPath = [
  { label: "Docs", href: "/docs" },
  { label: "Self Hosted", href: "/docs/self-hosted" },
  { label: "Installation" },
]

const Installation = () => {
  return (
    <DocLayout breadcrumbPath={breadcrumbPath}>
      <Seo
        title="Self-Hosted Installation"
        description="Learn how to install the self-hosted version of Regulus. Follow step-by-step instructions to set up Regulus on your own infrastructure."
        keywords={[
          "Self-Hosted Installation",
          "Regulus Installation",
          "Self-Hosted Regulus",
          "Blockchain Monitoring Setup",
          "Regulus Deployment Guide",
          "Regulus Documentation",
        ]}
      >
        <meta
          property="og:url"
          content="https://getregulus.co/docs/self-hosted/installation"
        />
      </Seo>

      <main className="flex-grow">
        <section className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-800 text-2xl sm:text-3xl font-medium mb-6">
              Self-Hosted Installation Guide
            </h1>

            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-6">
              Introduction
            </h2>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              This guide provides detailed instructions for installing the
              self-hosted version of Regulus. By hosting Regulus on your own
              infrastructure, you gain greater control, enhanced customization,
              and seamless integration with your existing systems.
            </p>

            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-6">
              Prerequisites
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-4 mb-6">
              <li>
                <strong>Git:</strong> Ensure Git is installed on your machine.
                Use the following command to verify:
                <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto mt-2">
                  <code>git --version</code>
                </pre>
              </li>
              <li>
                <strong>Docker and Docker Compose:</strong> Install Docker and
                Docker Compose by following the
                <a
                  href="https://docs.docker.com/get-docker/"
                  className="text-blue-600 hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  official Docker guide
                </a>
                .
              </li>
              <li>
                <strong>PostgreSQL:</strong> Set up a PostgreSQL instance.
                Ensure you have the necessary credentials (username, password,
                database name).
              </li>
              <li>
                <strong>Node.js:</strong> Install Node.js (version 14 or higher
                recommended).
              </li>
            </ul>

            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-6">
              System Requirements
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-4 mb-6">
              <li>
                <strong>Operating System:</strong> Ubuntu 20.04 or later, macOS
                10.15 or later.
              </li>
              <li>
                <strong>Processor:</strong> 4 CPU cores or more. ARM-based
                processors are also supported (e.g., Apple M1, M2)
              </li>
              <li>
                <strong>Memory:</strong> 8 GB RAM (minimum), 16 GB recommended
                for production.
              </li>
              <li>
                <strong>Storage:</strong> At least 10 GB of available hard drive
                space (preferably SSD for faster load times)
              </li>
            </ul>

            <h2 className="text-gray-800 text-xl sm:text-2xl font-medium mb-6">
              Installation Steps
            </h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-6">
              <li>
                <strong>Clone the Repository:</strong>
                <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto mt-2">
                  <code>
                    git clone https://github.com/getregulus/regulus.git
                  </code>
                </pre>
              </li>
              <li>
                <strong>Set Up Environment Variables:</strong> Create a{" "}
                <code>.env</code> file in the root directory and include:
                <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto mt-2">
                  <code>
                    DB_HOST=db <br />
                    DB_PORT=5432 <br />
                    DB_USER=ChangeMe (default: postgres) <br />
                    DB_PASS=ChangeMe (default: postgres) <br />
                    DB_NAME=regulus <br />
                    API_URL=http://localhost:3000 <br />
                    JWT_SECRET=ChangeMe <br />
                    JWT_EXPIRATION=1h (default: 1h) <br />
                    CORS_ORIGIN='' (default: no allowed origins for CORS) <br />
                  </code>
                </pre>
              </li>
              <li>
                <strong>Start the Application:</strong>
                <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto mt-2">
                  <code>docker-compose up -d</code>
                </pre>
              </li>
              <li>
                <strong>Run Migrations:</strong> Apply database migrations:
                <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto mt-2">
                  <code>
                    docker exec regulus-backend npx prisma migrate deploy
                  </code>
                </pre>
              </li>
              <li>
                <strong>Verify Installation:</strong> Access the application at:
                <pre className="bg-gray-900 text-gray-200 p-4 rounded overflow-x-auto mt-2">
                  <code>http://localhost:3000</code>
                </pre>
              </li>
            </ol>
          </div>
        </section>
      </main>
    </DocLayout>
  )
}

export default Installation
