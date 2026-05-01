import React from "react";
import logo from "@/Assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="border-b px-2 bg-amber-100">
        <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
          <div className="flex gap-2 items-center">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo"
                loading="eager"
                width={80}
                height={80}
                className="object-cover h-auto w-auto"
              />
            </Link>
          </div>

          <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/All-tiles"}>All Tiles</Link>
            </li>
            <li>
              <Link href={"/profile"}>My Profile</Link>
            </li>
          </ul>

          <div className="flex justify-end gap-1">
            <button className="btn bg-blue-950 text-white ">Sign-up</button>

            <button className="btn bg-blue-950 text-white ">Login</button>
          </div>

          <div className="flex gap-4">
            {/* {!user && (
              <ul className="flex items-center  text-sm gap-5">
                <li>
                  <Link href={"/signup"}>SignUp</Link>
                </li>
                <li>
                  <Link href={"/signin"}>SignIn</Link>
                </li>
              </ul>
            )} */}

            {/* {user && (
              <div className="flex gap-3">
                <Avatar size="sm">
                  <Avatar.Image
                    alt="John Doe"
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <Button onClick={handleSignOut} size="sm" variant="danger">
                  SignOut
                </Button>
              </div> */}
            {/* )} */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
