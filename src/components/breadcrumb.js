import React from "react";

const Breadcrumb = ({ path }) => (
  <nav aria-label="Breadcrumb" className="mb-4">
    <ol className="flex space-x-2 text-gray-500">
      {path.map((crumb, index) => (
        <li key={index} className="flex items-center">
          {index > 0 && <span className="mx-2">/</span>}
          {crumb.href ? (
            <a href={crumb.href} className="text-blue-600 hover:underline">
              {crumb.label}
            </a>
          ) : (
            <span>{crumb.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
