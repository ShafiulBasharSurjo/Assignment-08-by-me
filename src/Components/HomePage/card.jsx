import tilesData from "@/Assets/data.json";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function getData() {
  return Array.isArray(tilesData) ? tilesData : tilesData.data || [];
}

export default async function HomePage() {
  const datas = getData();
  const featuredTiles = datas?.slice(0, 4) || [];

  return (
    <>
      <section className="bg-[#F8F8F8] py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-black">
            Featured Tiles
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTiles.map((data) => (
            <div
              key={data.id}
              className="bg-white group flex flex-col items-center p-6 transition-all"
            >
              <div className="relative w-full aspect-square mb-6 overflow-hidden bg-[#F3F3F3]">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  priority={data.id <= 2}
                />
              </div>

              <div className="text-center flex flex-col items-center w-full">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                  {data.category}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-2 text-black">
                  {data.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">${data.price}</p>

                <Link
                  href={`/tiles/${data.id}`}
                  className="w-full py-3 border border-black text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-blue-950 hover:text-white transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
