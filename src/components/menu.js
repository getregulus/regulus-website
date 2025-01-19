import React, { useState } from "react"
import { Link } from "gatsby"

const Menu = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <nav className="p-4 lg:border-r border-gray-300 lg:border-gray-200 lg:border-l-blue-400">
      <ul className="space-y-4">
        {items &&
          items.map((item, index) => (
            <li key={index}>
              <div className="flex items-center justify-between">
                {/* Parent Menu Item as a Link */}
                <Link
                  to={item.href}
                  className={`text-gray-700 hover:text-blue-400 font-medium ${
                    item.children ? "py-2" : ""
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`transform transition-transform ${
                      openIndex === index ? "" : "-rotate-90"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-gray-500"
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
                )}
              </div>

              {/* Child Menu Items (Accordion) */}
              {item.children && openIndex === index && (
                <ul
                  className="ml-4 mt-4 lg:border-l-2 border-blue-400 pl-4 space-y-4"
                  style={{ borderLeftWidth: "2px" }}
                >
                  {item?.children?.map((child, childIndex) => (
                    <li key={childIndex} className="mt-2">
                      <Link
                        to={child.href}
                        className="text-gray-600 hover:text-blue-400 block text-sm"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Menu
