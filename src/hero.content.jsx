import deliveryIcon from "./assets/free-delivery.png";
import securePayment from "./assets/secure-payment.png";
import customerSupport from "./assets/customer-service.png";

function HeroBanner() {
  return (
    <section className="bg-blue-50">
      <div className="bg-linear-to-t from-blue-900 to-sky-500 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-3 mb-3 rounded-2xl">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Limited Time Offer ✨
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Big <span className="text-orange-500">Sale</span> <br />
            <span className="font-normal">Up to </span> 50% Off
          </h1>

          <p className="mt-4 text-white text-lg font-righteous">
            Discover the best products at unbeatable prices. Shop smart, shop
            fast, and save more today.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Shop Now
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
              View Deals
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="absolute -top-6 -right-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            SAVE 50% ON HEADPHONES
          </div>

          <img
            src="https://pngimg.com/uploads/headphones/headphones_PNG7645.png"
            alt="Hero Product"
            className="w-full max-w-md drop-shadow-xl"
          />
        </div>
      </div>

      {/* Features */}

      <div className="bg-white max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center rounded-2xl shadow-md">
        <div className="flex items-center gap-4">
          {/*left side icon*/}
          <img className="size-18" src={deliveryIcon} alt="" />
          <div>
            <h3 className="font-semibold text-gray-800"> Free Shipping</h3>
            <p className="text-gray-500 text-base">On orders over $99</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img className="size-18" src={securePayment} alt="" />
          <div>
            <h3 className="font-semibold text-gray-800">Secure Payment</h3>
            <p className="text-gray-500 text-base">100% protected</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img className="size-18" src={customerSupport} alt="" />
          <div>
            <h3 className="font-semibold text-gray-800">24/7 Support</h3>
            <p className="text-gray-500 text-base">Customer care anytime</p>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default HeroBanner;
