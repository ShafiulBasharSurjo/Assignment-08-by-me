"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use } from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  console.log(pathname, "pathname");

  const isActive = pathname === href;

  if (isActive) {
    return <span className="text-blue-950 font-bold">{children}</span>;
  }

  return <Link href={href}>{children}</Link>;
};

export default NavLink;
