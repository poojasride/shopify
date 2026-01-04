import deliveryIcon from "./assets/free-delivery.png";
import securePayment from "./assets/secure-payment.png";
import customerSupport from "./assets/customer-service.png";
import refund from "./assets/refund.png";

function HeroBanner() {
  return (
    <section className="bg-slate-100 px-4">
      
      {/* HERO SECTION */}
      <div
        className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 
        max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-10 
        grid grid-cols-1 md:grid-cols-2 items-center gap-10 
        mt-3 mb-6 rounded-2xl"
      >
        {/* Left Content */}
        <div className="text-center md:text-left">
          <span className="inline-block bg-amber-100 text-amber-700 
            text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Limited Time Offer ✨
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 leading-tight">
            Big <span className="text-amber-400">Sale</span> <br />
            <span className="font-normal text-slate-200">Up to </span> 50% Off
          </h1>

          <p className="mt-4 text-slate-200 text-base sm:text-lg">
            Discover the best products at unbeatable prices. Shop smart, shop
            fast, and save more today.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg 
              font-semibold hover:bg-amber-600 transition w-full sm:w-auto"
            >
              Shop Now
            </button>

            <button
              className="border border-slate-300 text-slate-200 px-6 py-3 
              rounded-lg font-semibold hover:bg-slate-600 transition w-full sm:w-auto"
            >
              View Deals
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center mt-6 md:mt-0">
          {/* Glow */}
          <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>

          {/* Offer Badge */}
          <div
            className="absolute -top-4 right-0 sm:-top-6 sm:-right-6 
            bg-amber-500 text-slate-900 px-3 py-1.5 
            rounded-full text-xs sm:text-sm font-semibold shadow-lg"
          >
            SAVE 50% ON HEADPHONES
          </div>

          <img
            src="https://pngimg.com/uploads/headphones/headphones_PNG7645.png"
            alt="Hero Product"
            className="w-64 sm:w-80 md:w-full max-w-md 
            drop-shadow-2xl relative z-10"
          />
        </div>
      </div>

      {/* FEATURES */}
      <div
        className="bg-white max-w-7xl mx-auto px-4 sm:px-6 py-6 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 
        rounded-2xl shadow-md mb-6"
      >
        {[ 
          { icon: deliveryIcon, title: "Free Shipping", desc: "On orders over $99" },
          { icon: securePayment, title: "Secure Payment", desc: "100% protected" },
          { icon: customerSupport, title: "24/7 Support", desc: "Customer care anytime" },
          { icon: refund, title: "100% Refund", desc: "Refund available within 10 days" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 justify-center sm:justify-start text-center sm:text-left">
            <img className="w-12 h-12 sm:w-14 sm:h-14" src={item.icon} alt={item.title} />
            <div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default HeroBanner;



