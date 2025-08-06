// "use client";
// import React, { useState } from "react";
// import {
//   Search,
//   Filter,
//   ShoppingCart,
//   Star,
//   Heart,
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Instagram,
//   Facebook,
//   Twitter,
//   ChefHat,
//   Award,
//   Truck,
//   Menu,
//   X,
//   ArrowRight,
//   Users,
//   Cake,
// } from "lucide-react";

// const Home = () => {
//   const [currentPage, setCurrentPage] = useState("home");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [cartItems, setCartItems] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Sample product data
//   const products = [
//     {
//       id: 1,
//       name: "Chocolate Truffle Cake",
//       category: "cakes",
//       price: 899,
//       image:
//         "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
//       rating: 4.8,
//       description:
//         "Rich, decadent chocolate cake layered with smooth truffle cream and topped with chocolate ganache.",
//       ingredients: [
//         "Dark Chocolate",
//         "Fresh Cream",
//         "Butter",
//         "Eggs",
//         "Vanilla",
//         "Sugar",
//       ],
//       sizes: ["Half Kg", "1 Kg", "2 Kg"],
//       eggless: false,
//       featured: true,
//     },
//     {
//       id: 2,
//       name: "Red Velvet Cupcakes",
//       category: "cakes",
//       price: 299,
//       image:
//         "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400",
//       rating: 4.6,
//       description:
//         "Classic red velvet cupcakes with cream cheese frosting, perfect for any celebration.",
//       ingredients: [
//         "Flour",
//         "Cocoa Powder",
//         "Cream Cheese",
//         "Butter",
//         "Food Coloring",
//       ],
//       sizes: ["6 Pack", "12 Pack"],
//       eggless: true,
//       featured: false,
//     },
//     {
//       id: 3,
//       name: "Almond Croissants",
//       category: "pastries",
//       price: 149,
//       image: "https://images.unsplash.com/photo-1555507036-ab794f4ade6a?w=400",
//       rating: 4.7,
//       description:
//         "Buttery, flaky croissants filled with sweet almond cream and topped with sliced almonds.",
//       ingredients: ["Butter", "Flour", "Almonds", "Sugar", "Cream", "Yeast"],
//       sizes: ["Single", "Pack of 4"],
//       eggless: false,
//       featured: true,
//     },
//     {
//       id: 4,
//       name: "Chocolate Chip Cookies",
//       category: "cookies",
//       price: 199,
//       image:
//         "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
//       rating: 4.9,
//       description:
//         "Soft, chewy cookies loaded with premium chocolate chips. Made fresh daily.",
//       ingredients: [
//         "Flour",
//         "Chocolate Chips",
//         "Butter",
//         "Brown Sugar",
//         "Vanilla",
//       ],
//       sizes: ["6 Pack", "12 Pack", "24 Pack"],
//       eggless: true,
//       featured: true,
//     },
//     {
//       id: 5,
//       name: "Strawberry Cheesecake",
//       category: "cakes",
//       price: 799,
//       image:
//         "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
//       rating: 4.5,
//       description:
//         "Creamy New York style cheesecake topped with fresh strawberry compote.",
//       ingredients: [
//         "Cream Cheese",
//         "Fresh Strawberries",
//         "Graham Crackers",
//         "Sugar",
//         "Eggs",
//       ],
//       sizes: ["Half Kg", "1 Kg"],
//       eggless: false,
//       featured: false,
//     },
//     {
//       id: 6,
//       name: "Danish Pastries",
//       category: "pastries",
//       price: 179,
//       image:
//         "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
//       rating: 4.4,
//       description:
//         "Traditional Danish pastries with various fillings including apple, cheese, and chocolate.",
//       ingredients: ["Puff Pastry", "Apples", "Cheese", "Chocolate", "Butter"],
//       sizes: ["Single", "Pack of 6"],
//       eggless: false,
//       featured: false,
//     },
//   ];

//   const categories = [
//     { id: "all", name: "All Items", icon: "🍰" },
//     { id: "cakes", name: "Cakes", icon: "🎂" },
//     { id: "pastries", name: "Pastries", icon: "🥐" },
//     { id: "cookies", name: "Cookies", icon: "🍪" },
//   ];

//   // Filter products based on search and category
//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "all" || product.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const addToCart = (product, size = null) => {
//     setCartItems((prev) => [...prev, { ...product, size, id: Date.now() }]);
//   };

//   const toggleFavorite = (productId) => {
//     setFavorites((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   // Navigation Component
  

 

//   // Features Section


//   // Search and Filter Bar
//   const SearchAndFilter = () => (
//     <div className="bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//           <div className="flex-1 relative">
//             <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search for cakes, pastries, cookies..."
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <div className="flex space-x-2 overflow-x-auto">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
//                   selectedCategory === category.id
//                     ? "bg-pink-600 text-white"
//                     : "bg-white text-gray-600 hover:bg-pink-50"
//                 }`}
//               >
//                 <span>{category.icon}</span>
//                 <span>{category.name}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Product Card Component
//   const ProductCard = ({ product }) => (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
//       <div className="relative">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-48 object-cover"
//         />
//         <button
//           onClick={() => toggleFavorite(product.id)}
//           className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
//         >
//           <Heart
//             className={`h-5 w-5 ${
//               favorites.includes(product.id)
//                 ? "text-red-500 fill-current"
//                 : "text-gray-400"
//             }`}
//           />
//         </button>
//         {product.featured && (
//           <div className="absolute top-2 left-2 bg-pink-600 text-white px-2 py-1 rounded text-sm font-semibold">
//             Featured
//           </div>
//         )}
//       </div>

//       <div className="p-4">
//         <div className="flex items-center justify-between mb-2">
//           <h3 className="text-lg font-semibold text-gray-800">
//             {product.name}
//           </h3>
//           {product.eggless && (
//             <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
//               Eggless
//             </span>
//           )}
//         </div>

//         <div className="flex items-center mb-2">
//           <Star className="h-4 w-4 text-yellow-400 fill-current" />
//           <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
//         </div>

//         <p className="text-gray-600 text-sm mb-3 line-clamp-2">
//           {product.description}
//         </p>

//         <div className="flex items-center justify-between">
//           <span className="text-xl font-bold text-pink-600">
//             ₹{product.price}
//           </span>
//           <div className="space-x-2">
//             <button
//               onClick={() => setSelectedProduct(product)}
//               className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-200 transition-colors"
//             >
//               Details
//             </button>
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-pink-600 text-white px-3 py-1 rounded text-sm hover:bg-pink-700 transition-colors"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Product Detail Modal
//   const ProductDetail = ({ product, onClose }) => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
//         <div className="relative">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-64 object-cover"
//           />
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="p-6">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
//             {product.eggless && (
//               <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
//                 Eggless
//               </span>
//             )}
//           </div>

//           <div className="flex items-center mb-4">
//             <Star className="h-5 w-5 text-yellow-400 fill-current" />
//             <span className="text-gray-600 ml-1">
//               {product.rating} out of 5
//             </span>
//           </div>

//           <p className="text-gray-600 mb-6">{product.description}</p>

//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
//             <div className="flex flex-wrap gap-2">
//               {product.ingredients.map((ingredient, index) => (
//                 <span
//                   key={index}
//                   className="bg-gray-100 px-3 py-1 rounded-full text-sm"
//                 >
//                   {ingredient}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-2">Available Sizes</h3>
//             <div className="space-y-2">
//               {product.sizes.map((size, index) => (
//                 <label key={index} className="flex items-center">
//                   <input type="radio" name="size" className="mr-2" />
//                   <span>{size}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <span className="text-3xl font-bold text-pink-600">
//               ₹{product.price}
//             </span>
//             <div className="space-x-4">
//               <button
//                 onClick={() => toggleFavorite(product.id)}
//                 className="border border-pink-600 text-pink-600 px-6 py-2 rounded-lg hover:bg-pink-50 transition-colors"
//               >
//                 {favorites.includes(product.id)
//                   ? "Remove from Favorites"
//                   : "Add to Favorites"}
//               </button>
//               <button
//                 onClick={() => addToCart(product)}
//                 className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Products Page
//   const ProductsPage = () => (
//     <div>
//       <SearchAndFilter />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//         {filteredProducts.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">
//               No products found matching your criteria.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );


 

 
//   // Main App Component
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navigation />

//       {currentPage === "home" && (
//         <>
//           <HeroSection />
//           <FeaturesSection />
//           <div className="py-16 bg-gray-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-4">
//                   Featured Products
//                 </h2>
//                 <p className="text-gray-600">Try our most popular items</p>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {products
//                   .filter((product) => product.featured)
//                   .map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                   ))}
//               </div>
//               <div className="text-center mt-8">
//                 <button
//                   onClick={() => setCurrentPage("products")}
//                   className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
//                 >
//                   View All Products
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       {currentPage === "products" && <ProductsPage />}
//       {currentPage === "about" && <AboutPage />}
//       {currentPage === "contact" && <ContactPage />}

//       {selectedProduct && (
//         <ProductDetail
//           product={selectedProduct}
//           onClose={() => setSelectedProduct(null)}
//         />
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React from 'react'
import Home from './home/page'

const page = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default page
