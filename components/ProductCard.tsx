import Link from "next/link";
import { useCartStore } from "@/stores/cart-store";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating?: number;
};

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Link
      href={`/product/${product.id}`}
      className="block bg-white rounded-lg shadow overflow-hidden hover:ring-2 hover:ring-blue-600 transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-base text-black font-medium line-clamp-2">
          {product.title}
        </h3>
        <p className="text-lg text-black font-semibold">${product.price}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart({ ...product, quantity: 1 });
          }}
          className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-medium">
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
