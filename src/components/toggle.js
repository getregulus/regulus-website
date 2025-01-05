import React, { useState } from "react";

const Toggle = ({ toggleOptions, plansData, containerClassName }) => {
  const [selectedOption, setSelectedOption] = useState(toggleOptions[0].key);

  return (
    <div className={`px-4 md:px-8 ${containerClassName || ""}`}>
      {/* Toggle Switch */}
      <div className="flex justify-center mb-8">
        <div className="relative flex items-center bg-gray-200 rounded-full w-60 h-12">
          {toggleOptions.map((option) => (
            <button
              key={option.key}
              className={`flex-1 text-center text-sm font-semibold rounded-full h-10 mx-1 ${
                selectedOption === option.key
                  ? "bg-white text-gray-900 shadow"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedOption(option.key)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Plans Content */}
      <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
        {plansData[selectedOption].map((plan, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold">{plan.title}</h3>
              <p className="text-sm text-gray-500">{plan.description}</p>
              <p className="text-2xl font-bold mt-4">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={plan.button.link}
              className="mt-6 block text-center bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition"
            >
              {plan.button.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toggle;
