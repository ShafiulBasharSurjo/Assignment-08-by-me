"use client";
import React from "react";
import logo from "@/Assets/logo.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, isPending, "user");

  return (
    <>
      <div className="border-b px-2 bg-amber-100">
        <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
          <div className="flex gap-2 items-center">
            <NavLink href={"/"}>
              <Image
                src={logo}
                alt="logo"
                loading="eager"
                width={80}
                height={80}
                className="object-cover h-auto w-auto"
              />
            </NavLink>
          </div>

          <ul className="flex items-center gap-5 text-sm">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/All-tiles"}>All Tiles</NavLink>
            </li>
            <li>
              <NavLink href={"/profile"}>My Profile</NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-1">
            {isPending ? (
              <span className="loading loading-dots loading-lg"></span>
            ) : !user ? (
              <>
                <NavLink href="/register">
                  <button className="btn bg-blue-950 text-white">
                    Sign-up
                  </button>
                </NavLink>
                <NavLink href="/login">
                  <button className="btn bg-blue-950 text-white">Login</button>
                </NavLink>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <h2>Hello, {user.name}</h2>
                <button
                  className="btn bg-blue-950 text-white"
                  onClick={async () => await authClient.signOut()}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
