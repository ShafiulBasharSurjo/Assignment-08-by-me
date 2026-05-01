import Image from "next/image";
import logo from "@/Assets/logo.png";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="relative mt-24 bg-amber-100">
        <div className="mt-12 h-px w-full" />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
        />
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="Logo"
                  width={80}
                  height={80}
                  className="dark:brightness-200"
                />
              </div>

              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
                Premium tiles for kitchens, bathrooms, and living spaces.
                Delivered to your door.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
                Product
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <Link
                    href="/All-Tiles"
                    className="hover:text-black dark:hover:text-white transition"
                  >
                    All Tiles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Floor-Tiles"
                    className="hover:text-black dark:hover:text-white transition"
                  >
                    Floor Tiles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/WallTiles"
                    className="hover:text-black dark:hover:text-white transition"
                  >
                    Wall Tiles
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
                Company
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-black dark:hover:text-white transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-black dark:hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-black dark:hover:text-white transition"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-black dark:text-white">
                Start Your Decour
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Make your first order.
              </p>

              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-black text-white dark:bg-white dark:text-black 
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <p>
              © {new Date().getFullYear()} tiles gallery. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="hover:text-black dark:hover:text-white transition"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-black dark:hover:text-white transition"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
