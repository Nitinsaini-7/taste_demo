import { Star } from "lucide-react";

const ProductDetail = ({ product, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 h-10 w-10 bg-white rounded-full text-red-600 font-bold p-2 hover:bg-gray-100 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            {product.eggless && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Eggless
              </span>
            )}
          </div>

          <div className="flex items-center mb-4">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-gray-600 ml-1">
              {product.rating} out of 5
            </span>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6 text-gray-600">
            <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6 text-gray-600">
            <h3 className="text-lg font-semibold mb-2">Available Sizes</h3>
            <div className="space-y-2">
              {product.sizes.map((size, index) => (
                <label key={index} className="flex items-center">
                  <input type="radio" name="size" className="mr-2" />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-red-600">
              ₹{product.price}
            </span>
            <div className="space-x-4">
              
              <button
                onClick={() => addToCart(product)}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  export default ProductDetail