import React from "react"

const Hero = () => (
  <section className="py-10 lg:py-20">
    <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
      <h1 className="text-gray-700 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
        Ensure Compliance, Build Trust
      </h1>
      <p className="max-w-2xl text-gray-700 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed">
        Advanced monitoring solutions work seamlessly in the
        background, detecting and alerting suspicious activities so you can
        focus on driving innovation and growth.
      </p>
      <button className="bg-blue-400 text-white px-8 py-3 rounded-3xl shadow-lg hover:bg-blue-500 transition duration-300">
        Get Started
      </button>
    </div>
  </section>
)

export default Hero
