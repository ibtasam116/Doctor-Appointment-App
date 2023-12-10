import React from "react";

export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <>
      <footer className="bg-[#122E99] text-white">
        <p className="py-3 text-center font-xs ">
          &copy; Copyright {year}{" "}
          <span className="text-[#cbd0d680]">DOCOTORS.</span>{" "}
          <span className="block sm:inline">All rights reserved.</span>
        </p>
      </footer>
    </>
  );
}
