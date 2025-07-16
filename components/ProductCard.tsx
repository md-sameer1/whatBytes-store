type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: number;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col flex-1 justify-between gap-2">
        <h3 className="text-base text-black font-medium line-clamp-2">
          {product.title}
        </h3>
        <p className="text-lg text-black font-semibold">${product.price}</p>
        <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
