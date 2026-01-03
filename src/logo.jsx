import logo from "./assets/logo.jpg";
import addtocart from "./assets/shopping-cart.png"

function LogoComponant() {
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
          <button
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
          </button>
        </header>
      </div>
    </>
  );
}

export default LogoComponant;
