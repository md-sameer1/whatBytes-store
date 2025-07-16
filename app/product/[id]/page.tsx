"use client";

import { useRouter } from "next/navigation";
import products from "@/data/products.json";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type Params = { params: { id: string } };

export default function ProductPage({ params }: Params) {
  const router = useRouter();
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return notFound();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button
        onClick={() => router.back()}
        className="mb-6 inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 text-sm">
        <ArrowLeft className="inline mr-1 w-4 h-4" />
      </button>

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi.
          </p>

          <div className="flex items-center gap-2 mt-4">
            <label htmlFor="qty" className="text-sm font-medium">
              Qty:
            </label>
            <input
              id="qty"
              type="number"
              defaultValue={1}
              min={1}
              className="w-16 px-2 py-1 border rounded"
            />
          </div>

          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition text-sm font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
