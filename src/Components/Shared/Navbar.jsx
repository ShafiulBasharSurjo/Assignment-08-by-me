import React from "react";
import logo from "@/Assets/logo.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
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
            <NavLink href={"/register"}>
              <button className="btn bg-blue-950 text-white ">Sign-up</button>
            </NavLink>

            <NavLink href={"/login"}>
              <button className="btn bg-blue-950 text-white ">Login</button>
            </NavLink>
          </div>

          {/* <div className="flex gap-4"> */}
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
          {/* </div> */}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
