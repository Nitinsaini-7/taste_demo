'use client'

import { Heart, Star } from "lucide-react";
import { useState } from "react";
import ProductDetail from "./ProductDetails";


const ProductCard = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const addToCart = (product) => {
    // handle adding to cart logic
    console.log("Added to cart:", product);
  };

  return (
    <>
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          addToCart={addToCart}
        />
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <button
            onClick={() => toggleFavorite(product.id)}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
          >
            <Heart
              className={`h-5 w-5 ${
                favorites.includes(product.id) ? "text-red-500 fill-current" : "text-gray-400"
              }`}
            />
          </button>
          {product.featured && (
            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
              Featured
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            {product.eggless && (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Eggless</span>
            )}
          </div>

          <div className="flex items-center mb-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-red-600">₹{product.price}</span>
            <div className="space-x-2">
              <button
                onClick={() => setSelectedProduct(product)}
                className="bg-gray-100 text-gray-600 px-3 py-2 rounded text-sm hover:bg-gray-200"
              >
                Details
              </button>
              <button
                onClick={() => addToCart(product)}
                className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
