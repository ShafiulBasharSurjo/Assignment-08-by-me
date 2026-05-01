import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center shadow-2xl">
        <div className="w-full h-full bg-black/50 flex items-center ">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
              Turn Dreams into Reality
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
              Get high-quality tile for reasonable price.
            </p>

            <div className="flex gap-4">
              <Link href="#">
                <Button className="bg-slate-800 hover:bg-slate-900 text-white">
                  Browse Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
