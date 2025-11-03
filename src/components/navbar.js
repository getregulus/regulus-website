import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { trackEvent } from "@utils/trackEvent"

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
                      href="https://web.getregulus.co/"
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
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Blog
                    </Link>
                  </li>
                  {/* 
                  <li>
                    <Link
                      href=""
                      className="block px-4 py-2 hover:bg-gray-100 text-indigo-500"
                    >
                      Join Discord Channel
                    </Link>
                  </li>
                  */}
                </ul>
              </div>
            </li>

            <li>
              <Link
                to="/pricing"
                onClick={() =>
                  trackEvent({
                    event: "button_click",
                    category: "Navbar",
                    action: "Click Pricing",
                    label: "Navbar Pricing Link",
                  })
                }
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="https://web.getregulus.co/login"
            className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 text-center text-gray-700"
            onClick={() =>
              trackEvent({
                event: "button_click",
                category: "Navbar",
                action: "Click Sign In",
                label: "Navbar Sign In Button",
              })
            }
          >
            Sign In
          </Link>
          <Link
            to="https://web.getregulus.co/register"
            className="bg-blue-400 text-white px-4 py-2 rounded-md shadow hover:bg-blue-500"
            onClick={() =>
              trackEvent({
                event: "button_click",
                category: "Navbar",
                action: "Click Get Started",
                label: "Navbar CTA Button",
              })
            }
          >
            Get Started
          </Link>
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
                      href="https://web.getregulus.co/"
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
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="block text-gray-700">
                      Blog
                    </Link>
                  </li>
                  {/* 
                  <li>
                    <a href="" className="text-indigo-500">
                      Join Discord Channel
                    </a>
                  </li>
                  */}
                </ul>
              )}
            </li>
            <li>
              <Link to="/pricing">
                <a className="block text-gray-700">Pricing</a>
              </Link>
            </li>
            <li>
              <Link
                to="https://web.getregulus.co/login"
                className="block w-full text-center font-bold hover:text-blue-700 transition text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
              >
                Sign In
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="https://web.getregulus.co/register"
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
