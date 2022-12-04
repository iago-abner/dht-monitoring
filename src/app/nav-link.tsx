"use client";
import Link from "next/link";
import "./global.css";

export default function NavLink({ href, children, className }: any) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
