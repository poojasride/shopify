import logo from "./assets/logo.jpg";
import addtocart from "./assets/shopping-cart.png";
import { useCart } from "./handleAddTocart";
import { useState } from "react";

function LogoComponant() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

  const [open, setOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* HEADER */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 sticky top-0 z-50">
        <header className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img src={logo} className="w-16 h-16 rounded-full p-2 bg-white" />
            <h1 className="text-2xl font-bold text-white">Shopify</h1>
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
          <button
            onClick={() => setOpen(true)}
            className="relative bg-amber-500 px-4 py-2 rounded-lg"
          >
            <img src={addtocart} className="h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </header>
      </div>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-3">
          <div className="  w-full max-w-lg bg-white rounded-2xl  shadow-2xl  flex flex-col  max-h-[90vh] ">
            {/* HEADER */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
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

            {/* CART ITEMS */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 text-sm mt-10">
                  Your cart is empty
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="
                flex gap-4
                p-4
                border rounded-xl
                hover:shadow-sm transition
              "
                  >
                    <img
                      src={item.image}
                      className="
                  h-16 w-16
                  object-contain
                  bg-gray-50
                  rounded-lg
                  flex-shrink-0
                "
                    />

                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 line-clamp-2">
                        {item.title}
                      </p>

                      {/* QTY CONTROLS */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="
                      w-8 h-8
                      flex items-center justify-center
                      rounded-full
                      bg-gray-100
                      hover:bg-gray-200
                      text-lg
                    "
                        >
                          -
                        </button>

                        <span className="font-semibold text-gray-800">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="
                      w-8 h-8
                      flex items-center justify-center
                      rounded-full
                      bg-gray-100
                      hover:bg-gray-200
                      text-lg
                    "
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* PRICE + REMOVE */}
                    <div className="text-right flex flex-col justify-between">
                      <p className="font-semibold text-gray-900 text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="
                    text-xs
                    text-red-500
                    hover:text-red-700
                    mt-2
                  "
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER */}
            <div className="border-t px-5 py-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">Total</span>
                <span className="text-lg font-bold text-gray-900">
                  $
                  {cartItems
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="
            w-full
            bg-gray-900
            text-white
            py-2.5
            rounded-xl
            font-medium
            hover:bg-gray-800
            transition
          "
              >
                Close Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LogoComponant;
