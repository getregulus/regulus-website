import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const handleDropdownClick = dropdownName => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName)
  }

  const handleMouseEnter = dropdownName => {
    if (window.innerWidth > 768) {
      setOpenDropdown(dropdownName)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setOpenDropdown(null)
    }
  }

  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
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

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <ul className="flex space-x-8">
            {/* Products Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center py-2 text-gray-700 hover:text-blue-600"
                onClick={() => handleDropdownClick("products")}
              >
                Products
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
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
              <div
                className={`${
                  openDropdown === "products" ? "block" : "hidden"
                } absolute top-full left-0 bg-white border text-gray-700 rounded-md shadow-lg min-w-max z-10`}
              >
                <ul className="py-2">
                  <li>
                    <a
                      href="https://app.getregulus.co/"
                      target="_blank"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Regulus Cloud
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/getregulus/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Regulus Self Hosted Community Edition
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Features Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter("features")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center py-2 text-gray-700 hover:text-blue-600"
                onClick={() => handleDropdownClick("features")}
              >
                Features
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
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
              <div
                className={`${
                  openDropdown === "features" ? "block" : "hidden"
                } absolute top-full left-0 bg-white border text-gray-700 rounded-md shadow-lg min-w-max z-10`}
              >
                <ul className="py-2">
                  <li>
                    <a
                      href="#feature1"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Real-Time Transaction Monitoring
                      <p className="text-gray-600 text-xs max-w-sm">
                        Effortlessly track and evaluate transactions with
                        predefined and custom rules for unmatched security.
                      </p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#feature2"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Customizable Alerts
                      <p className="text-gray-600 text-xs max-w-sm">
                        Receive instant notifications via Slack, Email, or
                        Webhook whenever suspicious activities are detected.
                      </p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#feature2"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      No-Code Workflow Builder
                      <p className="text-gray-600 text-xs max-w-sm">
                        Easily create, arrange, and modify workflows within the
                        monitoring map using an intuitive, no-code
                        interface—customize rules seamlessly without technical
                        expertise.
                      </p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#feature2"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Global Compliance Coverage
                      <p className="text-gray-600 text-xs max-w-sm">
                        Ensure compliance with regulatory requirements in
                        different jurisdictions worldwide.
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Learn Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter("learn")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center py-2 text-gray-700 hover:text-blue-600"
                onClick={() => handleDropdownClick("learn")}
              >
                Learn
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
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
              <div
                className={`${
                  openDropdown === "learn" ? "block" : "hidden"
                } absolute top-full left-0 bg-white border text-gray-700 rounded-md shadow-lg min-w-max z-10`}
              >
                <ul className="py-2">
                  <li>
                    <Link
                      href="/docs"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Docs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="block px-4 py-2 hover:bg-gray-100 text-indigo-500"
                    >
                      Join Discord Channel
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link to="/pricing">
                <a className="block py-2 text-gray-700 hover:text-blue-600">
                  Pricing
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://app.getregulus.co/"
            className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 text-center text-gray-700"
          >
            Sign In
          </a>
          <a
            href="https://github.com/getregulus/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 text-white px-4 py-2 rounded-md shadow hover:bg-blue-500"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50">
          <ul className="space-y-2 p-4">
            <li>
              <button
                className="flex justify-between w-full text-gray-700"
                onClick={() => handleDropdownClick("products")}
              >
                Products
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    openDropdown === "products" ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
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
              {openDropdown === "products" && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <a
                      href="https://app.getregulus.co/"
                      className="block text-gray-700"
                    >
                      Regulus Cloud
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/getregulus/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-700"
                    >
                      Regulus Self Hosted Community Edition
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                className="flex justify-between w-full text-gray-700"
                onClick={() => handleDropdownClick("features")}
              >
                Features
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    openDropdown === "features" ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
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
              {openDropdown === "features" && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link to="#feature1" className="block text-gray-700">
                      Real-Time Transaction Monitoring
                      <p className="text-gray-600 text-xs max-w-sm">
                        Effortlessly track and evaluate transactions with
                        predefined and custom rules for unmatched security.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="#feature2" className="block text-gray-700">
                      Customizable Alerts
                      <p className="text-gray-600 text-xs max-w-sm">
                        Receive instant notifications via Slack, Email, or
                        Webhook whenever suspicious activities are detected.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="#feature3" className="block text-gray-700">
                      No-Code Workflow Builder
                      <p className="text-gray-600 text-xs max-w-sm">
                        Easily create, arrange, and modify workflows within the
                        monitoring map using an intuitive, no-code
                        interface—customize rules seamlessly without technical
                        expertise.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="#feature3" className="block text-gray-700">
                      Global Compliance Coverage
                      <p className="text-gray-600 text-xs max-w-sm">
                        Ensure compliance with regulatory requirements in
                        different jurisdictions worldwide.
                      </p>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                className="flex justify-between w-full text-gray-700"
                onClick={() => handleDropdownClick("learn")}
              >
                Learn
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    openDropdown === "learn" ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
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
              {openDropdown === "learn" && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link to="/docs" className="block text-gray-700">
                      Docs
                    </Link>
                  </li>
                  <li>
                    <a href="" className="text-indigo-500">
                      Join Discord Channel
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/pricing">
                <a className="block text-gray-700">Pricing</a>
              </Link>
            </li>
            <li>
              <a
                href="https://app.getregulus.co/"
                className="block w-full text-center font-bold hover:text-blue-700 transition text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
              >
                Sign In
              </a>
            </li>
            <li className="w-full">
              <Link
                to="https://github.com/getregulus/"
                className="bg-blue-400 text-white w-full py-2 rounded-md mt-2 block text-center"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
