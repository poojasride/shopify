import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import seller from "./assets/products.png";

function ProductComponant() {
  const [products, setProducts] = useState([]);

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
    <div className="bg-white py-10">
      <section className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="flex gap-2 items-center justify-center">
            <img
              src={seller}
              alt=""
              className="w-16 h-16 rounded-full p-2 bg-white shadow-md"
            />
            <h1 className="text-gray-900 font-bold text-3xl md:text-4xl tracking-wide">
              Our <span className="text-amber-400 "> Products</span>
            </h1>
          </div>

          <p className="text-gray-500 mt-3 tracking-widest text-sm font-semibold">
            EXPLORE OUR COLLECTIONS
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <div key={item.id} className="border border-slate-200 rounded-2xl">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductComponant;
