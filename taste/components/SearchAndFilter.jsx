'use client'

import { Search } from "lucide-react";

const categories = [
  { id: "all", name: "All Items", icon: "🍰" },
  { id: "cakes", name: "Cakes", icon: "🎂" },
  { id: "pastries", name: "Pastries", icon: "🥐" },
  { id: "cookies", name: "Cookies", icon: "🍪" },
];

const SearchAndFilter = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => (
  <div className="bg-gray-50 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for cakes, pastries, cookies..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap ${
                selectedCategory === category.id
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-600 hover:bg-pink-50"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SearchAndFilter;
