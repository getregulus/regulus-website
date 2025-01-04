import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <StaticImage
              src="../images/logo.png"
              loading="eager"
              width={120}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Regulus Logo"
            />
          </Link>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Dropdown
            label="Products"
            items={[
              { label: "Regulus Cloud", href: "#product1" },
              {
                label: "Regulus Self Hosted Community Edition",
                href: "#product2",
              },
              {
                label: "Regulus Self Hosted Enterprise Edition",
                href: "#product3",
              },
            ]}
          />
          <Dropdown
            label="Features"
            items={[
              {
                label: "Real-Time Transaction Monitoring",
                description:
                  "Effortlessly track and evaluate transactions with predefined and custom rules for unmatched security.",
                href: "#feat1",
              },
              {
                label: "Customizable Alerts",
                description:
                  "Receive instant notifications via Slack, OpsGenie, Email, or Webhook whenever suspicious activities are detected.",
                href: "#feat2",
              },
              {
                label: "No-Code Rule Builder",
                description:
                  "Design and implement custom monitoring rules through an intuitive, no-code interface.",
                href: "#feat3",
              },
              {
                label: "Global Compliance Coverage",
                description:
                  "Ensure compliance with regulatory requirements in over 25 jurisdictions worldwide.",
                href: "#feat4",
              },
              {
                label: "API and Integration Support",
                description:
                  "Seamlessly integrate Regulus with your CI/CD pipeline and popular tools in your tech stack.",
                href: "#feat5",
              },
            ]}
          />
          <Dropdown
            label="Learn"
            items={[
              { label: "Help Center", href: "#product1" },
              {
                label: "Docs",
                href: "#product2",
              },
            ]}
          />
          <a href="#pricing" className="text-gray-700 hover:text-blue-600">
            Pricing
          </a>
          <a href="#demo" className="text-gray-700 hover:text-blue-600">
            Demo
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#signin"
            className="text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Sign in
          </a>
          <button className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 flex items-center">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg px-6 pb-4 mt-2">
          <Dropdown
            label="Products"
            items={[
              { label: "Product 1", href: "#product1" },
              { label: "Product 2", href: "#product2" },
            ]}
          />
          <Dropdown
            label="Features"
            items={[
              { label: "Feature 1", href: "#feature1" },
              { label: "Feature 2", href: "#feature2" },
            ]}
          />
          <Dropdown
            label="Learn"
            items={[
              { label: "Help Center", href: "#feature1" },
              { label: "Docs", href: "#feature2" },
            ]}
          />
          <a
            href="#pricing"
            className="block py-2 text-gray-700 hover:bg-gray-100"
          >
            Pricing
          </a>
          <a
            href="#demo"
            className="block py-2 text-gray-700 hover:bg-gray-100"
          >
            Demo
          </a>
          <a
            href="#signin"
            className="w-full flex justify-center text-gray-700 border border-gray-300 py-2 rounded-lg mt-4 hover:bg-gray-100"
          >
            Sign in
          </a>
          <button className="block w-full bg-blue-400 text-white px-4 py-2 rounded-lg shadow mt-4 hover:bg-blue-500">
            Get Started
          </button>
        </nav>
      )}
    </header>
  )
}

const Dropdown = ({ label, items, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`relative ${isMobile ? "py-2" : ""}`}>
      <button
        className="text-gray-700 hover:text-blue-600 flex items-center justify-between w-full py-2 lg:py-0"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className={`${
            isMobile ? "block" : "absolute"
          } left-0 bg-white shadow-lg rounded-lg mt-2 py-2 w-72 z-10`}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.label}
              {item.description && (
                <span className="block pt-2 text-xs text-gray-500 hover:bg-gray-100">
                  {item.description}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
