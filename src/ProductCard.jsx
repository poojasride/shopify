import { useCart } from "./handleAddTocart";

function ProductCard({ product }) {
  const stars = Math.floor(Math.random() * 5) + 1;

  const { addToCart, cartItems, increaseQty, decreaseQty, removeFromCart } =
    useCart();

  const cartProduct = cartItems.find((item) => item.id === product.id);

  const quantity = cartProduct ? cartProduct.quantity : 0;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col h-full overflow-hidden">
      {/* IMAGE */}
      <div className="w-full h-36 bg-slate-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 text-lg line-clamp-1 mb-2">
          {product.title}
        </h3>

        {/* STARS */}
        <div className="flex items-center mb-3">
          <span className="text-yellow-400">
            {"★".repeat(stars)}
            {"☆".repeat(5 - stars)}
          </span>
        </div>

        <p className="font-bold text-xl mb-4">${product.price}</p>

        {/* ACTION AREA */}
        {quantity === 0 ? (
          // ADD TO CART BUTTON
          <button
            onClick={() => addToCart(product)}
            className="mt-auto bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold"
          >
            Add to Cart
          </button>
        ) : (
          // QTY CONTROLS
          <div className="mt-auto border-t pt-4 flex items-center justify-between">
            {/* REMOVE BUTTON */}
            <button
              onClick={() => removeFromCart(product.id)}
              className="
      text-sm font-medium
      text-white
      bg-red-500
      border border-red-200
      hover:border-red-700
      hover:bg-red-600
      px-3 py-1.5
      rounded-full
      transition
    "
            >
              Remove
            </button>

            {/* QUANTITY CONTROLLER */}
            <div
              className="
      flex items-center
      bg-gray-100
      rounded-full
      shadow-sm
      overflow-hidden
    "
            >
              <button
                onClick={() => decreaseQty(product.id)}
                className="
        w-9 h-9
        flex items-center justify-center
        text-lg
        hover:bg-gray-200
        transition
      "
              >
                −
              </button>

              <span className="px-4 font-semibold text-gray-800">
                {quantity}
              </span>

              <button
                onClick={() => increaseQty(product.id)}
                className="
        w-9 h-9
        flex items-center justify-center
        text-lg
        hover:bg-gray-200
        transition
      "
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
