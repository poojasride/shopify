function CartComponant({ image, category, onClick }) {
  return (
    <div
      // onClick={() => onClick(category)}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300"
    >
      {/* Image */}
      <div className="bg-slate-100 p-6">
        <img
          src={image}
          alt={category}
          className="w-full h-40 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Category Button */}
      <div className="bg-slate-900 group-hover:bg-amber-500 transition duration-300 text-center py-3">
        <button className="text-amber-400 group-hover:text-slate-900 font-bold uppercase tracking-wide">
          {category}
        </button>
      </div>
    </div>
  );
}

export default CartComponant;
