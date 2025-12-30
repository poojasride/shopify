import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductComponant() {
  const [products, setProducts] = useState([]);
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
    <div className="bg-slate-100 ">
      <section className="max-w-7xl mx-auto px-6 py-2">
        <h1 className="text-gray-800 font-bold text-xl md:text-2xl m-5">
          Best Sellers
        </h1>

        <div className=" grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductComponant;
