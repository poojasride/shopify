function CartComponant({ image,  category }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md border border-slate-700 hover:border-none hover:ring-2 hover:ring-amber-500 ">
      <img
        className="w-full h-48 object-contain bg-slate-500 p-4"
        src={image}
       
      />

      <hr />

      <div className="px-6 py-4 bg-slate-700 text-white text-center">
        <p className="text-sm text-amber-400 font-bold uppercase">{category}</p>
      </div>
    </div>
  );
}

export default CartComponant;
