import products from "@/data/products.json";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import AddToCartSection from "./addToCartSection";

type Params = { params: { id: string } };

export default function ProductPage({ params }: Params) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return notFound();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link
        href="/"
        className="mb-6 inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 text-sm">
        <ArrowLeft className="inline mr-1 w-4 h-4" />
        Back
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-lg font-semibold text-blue-500">
            ${product.price}
          </p>
          <p className="text-sm text-white">Category: {product.category}</p>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* 🔥 Client logic moved into child */}
          <AddToCartSection product={product} />
        </div>
      </div>
    </div>
  );
}
