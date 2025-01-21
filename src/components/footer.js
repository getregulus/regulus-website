import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="lg:flex lg:justify-between lg:items-start">
        {/* Logo and Description */}
        <div className="mb-6 lg:mb-0 lg:w-1/3">
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
          <p className="text-gray-700 mt-2 text-sm max-w-xs">
            Suspicious Activity Monitoring in Web3.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 lg:flex justify-end lg:space-x-24">
          <div className="flex flex-col">
            <h3 className="text-gray-800 font-bold mb-3">Products</h3>
            <ul className="space-y-2 text-gray-600 text-sm flex-1">
              <li>
                <a
                  href="https://app.getregulus.co/"
                  className="hover:text-gray-800"
                >
                  Regulus Cloud
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/getregulus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-800"
                >
                  Regulus Self-Hosted
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-gray-800 font-bold mb-3">Learn</h3>
            <ul className="space-y-2 text-gray-600 text-sm flex-1">
              <li>
                <a href="/docs" className="hover:text-gray-800">
                  Docs
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-gray-800 font-bold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-600 text-sm flex-1">
              <li>
                <a href="#privacy" className="hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gray-800">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-start text-gray-500 text-xs">
        © {new Date().getFullYear()} Regulus. All rights reserved.
      </div>
    </div>
  </footer>
)

export default Footer
