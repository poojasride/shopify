import logo from "./assets/logo.jpg";

function LogoComponant() {
  return (
    <>
      {/* Header background */}
      <div className="bg-linear-to-t from-blue-900 to-sky-500 to-indigo-500">
        <header
          className="max-w-7xl mx-auto flex items-center justify-between px-4"
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-20 h-20 rounded-full m-2 p-2 bg-white"
            />
            <h1 className="text-3xl font-bold text-white">Shopify</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8 text-sm sm:text-base lg:text-lg font-medium text-white">
            <a className="p-2 rounded-lg hover:ring-2 ring-orange-400" href="#">
              Home
            </a>
            <a className="p-2 rounded-lg hover:ring-2 ring-orange-400" href="#">
              Products
            </a>
            <a className="p-2 rounded-lg hover:ring-2 ring-orange-400" href="#">
              Categories
            </a>
            <a className="p-2 rounded-lg hover:ring-2 ring-orange-400" href="#">
              Deals
            </a>
            <a className="p-2 rounded-lg hover:ring-2 ring-orange-400" href="#">
              Contact Us
            </a>
          </nav>

          {/* Cart Button */}
          <button
            className="
              flex items-center gap-2
               text-white
              text-sm sm:text-base font-semibold
              px-4 py-2 sm:px-5 sm:py-2.5
              rounded-lg
              hover:ring-1 ring-white
              active:scale-95
              transition
            "
          >
            🛒 Add to Cart
          </button>
        </header>
      </div>
    </>
  );
}

export default LogoComponant;
