import Image from "next/image";
import Link from "next/link";
import React from "react";
import tilesData from "@/Assets/data.json";

export default async function Tiles() {
  const datas = Array.isArray(tilesData) ? tilesData : tilesData.data || [];

  return (
    <>
      <section className="bg-[#F8F8F8] py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-black">
            Available Tiles
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {datas.map((data) => (
            <div
              key={data.id}
              className="bg-white border border-gray-200 flex flex-col items-center p-6 transition-all"
            >
              <div className="w-full aspect-square overflow-hidden">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center flex flex-col items-center px-6 py-5 gap-2">
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  {data.category}
                </p>
                <h3 className="text-base font-bold uppercase tracking-wide text-black">
                  {data.title}
                </h3>
                <p className="text-sm text-gray-600 tracking-widest uppercase">
                  ${data.price}
                </p>

                <Link href={`/tiles/${data.id}`} className="w-full py-3 mt-3">
                  <button className="w-full border border-black py-3 text-xs font-bold uppercase tracking-widest hover:bg-blue-950 hover:text-white transition-colors duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
