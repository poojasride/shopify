import logo from "./assets/logo.jpg";
import addtocart from "./assets/shopping-cart.png";
import { useCart } from "./handleAddTocart";
import { useState } from "react";

function LogoComponant() {

   const { cartItems, removeFromCart } = useCart(); 

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Header background */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 sticky top-0 z-50">
        <header className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-16 rounded-full p-2 bg-white shadow-md"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-slate-100">
              Shopify
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8 text-sm sm:text-base lg:text-lg font-medium text-slate-200">
            <a
              className="p-2 rounded-lg hover:text-amber-400 transition"
              href="#"
            >
              Home
            </a>
            <a
              className="p-2 rounded-lg hover:text-amber-400 transition"
              href="#"
            >
              Best Sellers
            </a>
            <a
              className="p-2 rounded-lg hover:text-amber-400 transition"
              href="#"
            >
              Products
            </a>
            <a
              className="p-2 rounded-lg hover:text-amber-400 transition"
              href="#"
            >
              Deals
            </a>
            <a
              className="p-2 rounded-lg hover:text-amber-400 transition"
              href="#"
            >
              Contact Us
            </a>
          </nav>

          {/* Cart Button */}
          {/* <button

            
            className="
              flex items-center gap-2
              bg-amber-500 text-slate-900
              text-sm sm:text-base font-semibold
              px-4 py-2 sm:px-5 sm:py-2.5
              rounded-lg
              hover:bg-amber-600
              active:scale-95
              transition
            "
          >
          <img src={addtocart} alt="Add to Cart" className="w-full h-6" />
          </button> */}
          <button
            onClick={() => setOpen(true)}
            className="relative flex items-center gap-2
              bg-amber-500 text-slate-900
              px-4 py-2 sm:px-5 sm:py-2.5
              rounded-lg
              hover:bg-amber-600
              active:scale-95
              transition"
          >
            <img src={addtocart} className="h-6" />

            {totalItems > 0 && (
              <span
                className="
      absolute -top-2 -right-2
      bg-red-500 text-white text-xs
      w-5 h-5 flex items-center justify-center
      rounded-full
    "
              >
                {totalItems}
              </span>
            )}
          </button>
        </header>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-semibold text-gray-800">
                Shopping Cart
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>

            {/* Cart Items */}
            <div className="mt-4 space-y-4 max-h-64 overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 text-sm">
                  Your cart is empty
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border rounded-lg p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 object-contain bg-gray-50 rounded"
                    />

                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <p className="text-sm font-semibold text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>

                      <button
                        onClick={() => removeFromCart(item.id)} // ✅ WORKS NOW
                        className="text-xs text-red-500 hover:text-red-700 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Total */}
            <div className="border-t mt-5 pt-4 flex justify-between items-center">
              <span className="text-gray-600 font-medium">Total</span>
              <span className="text-lg font-bold text-gray-900">
                $
                {cartItems
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>

            {/* Footer */}
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LogoComponant;
