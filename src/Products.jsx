import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import seller from "./assets/seller.png";

function ProductComponant() {
  const [products, setProducts] = useState([]);

  // Pick first 4 as best sellers
  const bestSellers = products.slice(0, 4);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-slate-100 py-10">
      <section className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="flex gap-2 items-center justify-center">
            <img
              src={seller}
              alt=""
              className="w-16 h-16 rounded-full p-2 bg-white shadow-md animate-pulse"
            />
            <h1 className="text-gray-900 font-bold text-2xl md:text-3xl">
              Best Sellers
            </h1>
          </div>

          <p className="text-gray-600 mt-2 font-medium">
            Most loved products by our customers... ❤️
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductComponant;
