import deliveryIcon from "./assets/free-delivery.png";
import securePayment from "./assets/secure-payment.png";
import customerSupport from "./assets/customer-service.png";
import refund from "./assets/refund.png";

function HeroBanner() {
  return (
    <section className="bg-slate-100">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 
        max-w-7xl mx-auto px-24 py-12 grid grid-cols-1 md:grid-cols-2 
        items-center gap-8 mt-3 mb-6 rounded-2xl">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Limited Time Offer ✨
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight">
            Big <span className="text-amber-400">Sale</span> <br />
            <span className="font-normal text-slate-200">Up to </span> 50% Off
          </h1>

          <p className="mt-4 text-slate-200 text-lg">
            Discover the best products at unbeatable prices. Shop smart, shop
            fast, and save more today.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg 
              font-semibold hover:bg-amber-600 transition">
              Shop Now
            </button>

            <button className="border border-slate-300 text-slate-200 px-6 py-3 
              rounded-lg font-semibold hover:bg-slate-600 transition">
              View Deals
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>

          {/* Offer Badge */}
          <div className="absolute -top-6 -right-6 bg-amber-500 text-slate-900 
            px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            SAVE 50% ON HEADPHONES
          </div>

          <img
            src="https://pngimg.com/uploads/headphones/headphones_PNG7645.png"
            alt="Hero Product"
            className="w-full max-w-md drop-shadow-2xl relative z-10"
          />
        </div>
      </div>

      {/* FEATURES */}
      <div className="bg-white max-w-7xl mx-auto px-6 py-6 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 
        rounded-2xl shadow-md mb-6">

        <div className="flex items-center gap-4">
          <img className="w-14 h-14" src={deliveryIcon} alt="Free Shipping" />
          <div>
            <h3 className="font-semibold text-gray-800">Free Shipping</h3>
            <p className="text-gray-500 text-sm">On orders over $99</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img className="w-14 h-14" src={securePayment} alt="Secure Payment" />
          <div>
            <h3 className="font-semibold text-gray-800">Secure Payment</h3>
            <p className="text-gray-500 text-sm">100% protected</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img className="w-14 h-14" src={customerSupport} alt="Support" />
          <div>
            <h3 className="font-semibold text-gray-800">24/7 Support</h3>
            <p className="text-gray-500 text-sm">Customer care anytime</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img className="w-14 h-14" src={refund} alt="Refund" />
          <div>
            <h3 className="font-semibold text-gray-800">100% Refund</h3>
            <p className="text-gray-500 text-sm">Refund available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
