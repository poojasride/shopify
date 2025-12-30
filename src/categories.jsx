import axios from "axios";
import CartComponant from "./Cart";
import { useState, useEffect } from "react";

function CategoriesComponant() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const url = "https://fakestoreapi.com/products";
        const response = await axios.get(url);

        // REMOVE DUPLICATE CATEGORIES
        const uniqueCategories = [];
        const seen = new Set();

        response.data.forEach((item) => {
          if (!seen.has(item.category)) {
            seen.add(item.category);
            uniqueCategories.push(item);
          }
        });

        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="bg-white max-w-7xl mx-auto px-6 py-2">
      <h1 className="text-gray-800 font-bold text-xl md:text-2xl m-5">
        Featured Categories
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((item) => (
          <CartComponant
            key={item.id}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoriesComponant;
