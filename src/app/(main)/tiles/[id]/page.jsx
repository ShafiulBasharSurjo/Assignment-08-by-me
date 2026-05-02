import React from "react";
import tilesData from "@/Assets/data.json";
import Image from "next/image";
import Link from "next/link";

const TileDetailsPage = async ({ params }) => {
  const { id } = await params;
  const datas = Array.isArray(tilesData) ? tilesData : tilesData.data || [];
  const tile = datas.find((t) => String(t.id) === String(id));

  if (!tile) {
    return (
      <div className="min-h-fit bg-slate-50 p-4 md:p-10 font-sans">
        <p className="text-gray-500">Tile not found.</p>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left — Image */}
          <div className="w-full overflow-hidden bg-white">
            <Image
              src={tile.image}
              alt={tile.title}
              width={700}
              height={700}
              className="w-full h-full object-cover"
            />
            <p className="text-lg text-gray-500 mt-2">{tile.description}</p>
          </div>

          {/* Right — Details */}
          <div className="flex flex-col gap-6 py-4">
            {/* Category + Title */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-[4px] mb-2">
                {tile.category}
              </p>
              <h1 className="text-2xl font-bold uppercase tracking-widest text-gray-900">
                {tile.title}
              </h1>
            </div>

            <p className="text-xl font-semibold text-red-700 tracking-widest">
              ${tile.price}
            </p>

            <div className="h-px bg-gray-200" />

            {/* Stock urgency */}
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                {tile.inStock ? tile.inStock : 0} in stock
              </p>
            </div>

            <div className="h-px bg-gray-200" />

            {/* Attributes */}
            <div className="flex flex-col gap-3">
              {tile.size && (
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-widest text-gray-400 w-24">
                    Tile Size
                  </span>
                  <span className="border border-gray-300 px-3 py-1 text-xs uppercase tracking-widest">
                    {tile.size}
                  </span>
                </div>
              )}
              {tile.material && (
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-widest text-gray-400 w-24">
                    Material
                  </span>
                  <span className="border border-gray-300 px-3 py-1 text-xs uppercase tracking-widest">
                    {tile.material}
                  </span>
                </div>
              )}
            </div>

            <div className="h-px bg-gray-200" />

            <div className="grid grid-cols-2 gap-y-2 text-xs">
              <span className="uppercase tracking-widest text-gray-400">
                Dimensions
              </span>
              <span className="text-gray-700">{tile.dimensions}</span>
            </div>

            <div className="h-px bg-gray-200" />

            <Link
              href="/All-tiles"
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors mt-2 w-fit"
            >
              ← Back to All Tiles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TileDetailsPage;
