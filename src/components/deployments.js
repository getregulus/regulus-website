import React from "react"
import { Link } from "gatsby"

const Deployments = () => {
  const deploymentOptions = [
    {
      title: "Regulus Cloud",
      description:
        "We handle all maintenance and scalability so you can focus on your operations. Detect and resolve issues instantly with usage-based pricing that grows with you.",
      buttonText: "Learn More",
      link: "https://app.getregulus.co/",
      color: "border-yellow-500",
    },
    {
      title: "Regulus Self-Hosted",
      description:
        "Take full control by hosting Regulus on your infrastructure. Benefit from predictable, node-based pricing and total customization.",
      buttonText: "Learn More",
      link: "https://github.com/getregulus/regulus",
      color: "border-blue-500",
    },
    /*
    {
      title: "Regulus on AWS - Coming Soon",
      description:
        "Easily deploy Regulus on AWS with one click. Simplify billing by consolidating costs directly within your AWS account.",
      buttonText: "Deploy on AWS",
      link: "#",
      color: "border-purple-500",
    },
     */
  ]

  return (
    <section id="deployments" className="py-8">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 text-start lg:text-left mb-12 lg:mb-0">
          <h2 className="text-4xl font-extrabold mb-10 text-black">
            Deployments
          </h2>
          <p className="text-gray-700 mb-6 max-w-md">
            Regulus Cloud or Self-Hosted. Choose the option that best
            fits your operational needs.
          </p>
        </div>

        {/* Deployment Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 gap-6">
          {deploymentOptions.map((option, idx) => (
            <div
              key={idx}
              className={`border-l-4 ${option.color} bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {option?.title}
              </h3>
              <p className="text-gray-700 mb-4">{option.description}</p>
              <Link
                to={option?.link}
                className="font-bold hover:text-blue-700 transition text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
              >
                {option?.buttonText} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Deployments
