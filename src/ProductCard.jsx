import { useCart } from "./handleAddTocart";

function ProductCard({ product }) {
  const stars = Math.floor(Math.random() * 5) + 1;
  const { addToCart, cartItems } = useCart();

  const cartProduct = cartItems.find((item) => item.id === product.id);
  const quantity = cartProduct ? cartProduct.quantity : 0;
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out flex flex-col h-full overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-36 bg-slate-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 text-lg line-clamp-1 mb-2">
          {product.title}
        </h3>

        {/* Stars */}
        <div className="flex items-center mb-3">
          <span className="text-yellow-400 text-lg">
            {"★".repeat(stars)}
            {"☆".repeat(5 - stars)}
          </span>
          <span className="text-gray-400 text-sm ml-2">
            ({Math.floor(Math.random() * 200 + 1)})
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-2"></div>

        {/* Price */}
        <p className="text-gray-900 font-bold text-xl mb-4">${product.price}</p>

        {/* Button */}
        <button
          onClick={() => addToCart(product)}
          className={`mt-auto font-semibold py-2 rounded-lg shadow-md transition
    ${
      quantity > 0
        ? "bg-green-600 hover:bg-green-700 text-white"
        : "bg-amber-500 hover:bg-amber-600 text-white"
    }
  `}
        >
          {quantity > 0 ? `Added (${quantity})` : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
