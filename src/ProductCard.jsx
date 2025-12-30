function ProductCard({ product }) {
  const stars = Math.floor(Math.random() * 5) + 1;

  return (
    <div className="bg-white rounded shadow-lg p-4 flex flex-col h-full transition duration-300 ease-in-out hover:translate-y-1 hover:scale-100 hover:shadow-xl ">
      <img
        className="w-full h-48 object-contain p-4"
        src={product.image}
        alt={product.title}
      />

      <h3 className="font-semibold text-gray-800 p-2 line-clamp-2 h-[3.2rem]">
        {product.title}
      </h3>

      {/* RANDOM STARS */}
      <div className="px-2 py-1">
        <span className="text-yellow-500 text-lg font-bold">
          {"★".repeat(stars)}
          {"☆".repeat(5 - stars)}
        </span>
      </div>

      {/*Divider */}
      <span className="h-1 w-full bg-slate-300 mt-4"></span>

      <p className="text-gray-800 font-bold p-2">${product.price}</p>

      <button className="mt-auto bg-amber-500 hover:bg-amber-600 text-black p-2 rounded-lg cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
