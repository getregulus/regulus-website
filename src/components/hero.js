import React from "react"
import { Link } from "gatsby"

const Hero = ({ title, subtitle }) => (
  <section className="py-10 lg:py-20">
    <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
      <h1 className="text-gray-700 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-2xl">
        {title}
      </h1>
      <p className="max-w-2xl text-gray-700 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed">
        {subtitle}
      </p>
      <Link
        to="https://web.getregulus.co/register"
        className="bg-blue-400 text-white px-8 py-3 rounded-3xl shadow-lg hover:bg-blue-500 transition duration-300"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
              event: "button_click",
              category: "Homepage",
              action: "Click Get Started",
              label: "Hero CTA Button",
            })
          }
        }}
      >
        Get Started
      </Link>
    </div>
  </section>
)

export default Hero
