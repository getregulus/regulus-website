import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Features = () => {
  const featureList = [
    {
      title: "AI-Powered Transaction Monitoring",
      image: (
        <StaticImage
          src="../images/transaction-monitoring.svg"
          loading="eager"
          width={500}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="AI-Powered Transaction Monitoring"
        />
      ),
      description:
        "Regulus analyzes transactions in real-time, flagging high-risk entities and triggering alerts based on custom rules.",
    },
    {
      title: "Flexible Deployments",
      image: (
        <StaticImage
          src="../images/flexible-deployments.svg"
          loading="eager"
          width={500}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="Flexible Deployments"
        />
      ),
      description:
        "Deploy Regulus in cloud, hybrid, or on-premise setups, tailored to your operational needs.",
    },
    {
      title: "Enterprise Ready",
      image: (
        <StaticImage
          src="../images/enterprise-ready.svg"
          loading="eager"
          width={500}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="Flexible Deployments"
        />
      ),
      description:
        "Built for scalability and reliability, Regulus supports large-scale platforms seamlessly.",
    },
    {
      title: "Seamless Integration",
      image: (
        <StaticImage
          src="../images/seamless-integration.svg"
          loading="eager"
          width={500}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="Flexible Deployments"
        />
      ),
      description:
        "Easily integrate Regulus with tools like Email, Slack, and more for a cohesive workflow.",
    },
  ]

  return (
    <section id="features" className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-10 text-black">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList?.map((feature, idx) => (
            <FeatureCard
              key={idx}
              image={feature?.image}
              title={feature?.title}
              description={feature?.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({ image, title, description }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300 w-full max-w-3xl mx-auto">
    <div className="w-full flex justify-center items-center mb-4">{image}</div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  </div>
)

export default Features
