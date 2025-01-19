import React from "react"

const Features = () => {
  const featureList = [
    {
      title: "AI-Powered Transaction Monitoring",
      description:
        "Regulus evaluates transactions based on predefined and custom rules, flagging high-risk entities or countries and generating real-time alerts for suspicious activities.",
    },
    {
      title: "Flexible Deployments",
      description:
        "Deploy Regulus in cloud, hybrid, or on-premise setups, tailored to your operational needs.",
    },
    {
      title: "Enterprise Ready",
      description:
        "Built for scalability and reliability, Regulus supports large-scale platforms seamlessly.",
    },
    {
      title: "Seamless Integration",
      description:
        "Easily integrate Regulus with tools like Email, Slack, and more for a cohesive workflow.",
    },
  ]

  return (
    <section id="features" className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-10 text-black">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, idx) => (
            <FeatureCard
              key={idx}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

export default Features
