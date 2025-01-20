import React from "react"

const SwaggerChip = ({ method, endpoint, description }) => {
  const methodStyles = {
    GET: "bg-blue-600 text-white",
    POST: "bg-green-600 text-white",
    PUT: "bg-yellow-600 text-white",
    DELETE: "bg-red-600 text-white",
  }

  const containerStyles = {
    GET: "bg-blue-50 border-blue-600",
    POST: "bg-green-50 border-green-600",
    PUT: "bg-yellow-50 border-yellow-600",
    DELETE: "bg-red-50 border-red-600",
  }

  return (
    <div
      className={`flex items-center p-2 mb-2 border rounded shadow-sm ${containerStyles[method]}`}
    >
      <div
        className={`w-20 h-8 flex items-center justify-center font-bold text-sm rounded border ${methodStyles[method]}`}
      >
        {method}
      </div>
      <div className="ml-4 lg:flex items-center">
        <p className="font-mono font-semibold text-lg text-gray-800 mr-4">
          {endpoint}
        </p>
        <p className="text-gray-600 text-sm flex-grow text-right">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SwaggerChip
