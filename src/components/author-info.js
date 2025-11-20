import React from "react"

const AuthorInfo = ({ name, date }) => {
  // Generate initials for avatar
  const getInitials = (name) => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase()
  }

  // Generate a consistent color based on name
  const getAvatarColor = (name) => {
    const colors = [
      "bg-blue-500",
      "bg-purple-500",
      "bg-green-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
      "bg-orange-500",
      "bg-blue-600",
    ]
    const index = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
    return colors[index]
  }

  return (
    <div className="flex items-center space-x-3">
      <div
        className={`w-12 h-12 rounded-full ${getAvatarColor(name)} flex items-center justify-center text-white font-bold text-sm`}
      >
        {getInitials(name)}
      </div>
      <div>
        <p className="text-gray-900 font-medium">{name}</p>
        {date && <p className="text-gray-500 text-sm">{date}</p>}
      </div>
    </div>
  )
}

export default AuthorInfo

