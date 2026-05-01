import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      {/* Visual Tile Element */}
      <div className="relative mb-8 flex justify-center">
        <div className="grid grid-cols-2 gap-2 transform rotate-45">
          <div className="w-12 h-12 bg-[#5D3A2E] rounded-sm opacity-90"></div>
          <div className="w-12 h-12 bg-[#8C5E45] rounded-sm opacity-80"></div>
          <div className="w-12 h-12 bg-[#B17A5D] rounded-sm opacity-70"></div>
          <div className="w-12 h-12 bg-[#D4A373] rounded-sm opacity-60"></div>
        </div>
        <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-[#2D3E50] rotate-0">
          404
        </span>
      </div>

      {/* Text Content */}
      <h1 className="text-3xl font-bold text-[#2D3E50] mb-2 uppercase tracking-tight">
        Tile Not Found
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        It looks like the section you are looking for has been misplaced. Let us
        get you back to the gallery.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-[#2D3E50] text-white font-semibold rounded-md hover:bg-[#3d566e] transition-colors duration-200 shadow-lg"
      >
        Return to Gallery
      </Link>

      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
    </div>
  );
}
