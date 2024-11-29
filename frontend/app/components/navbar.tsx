import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-500 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">
          <a href="/dashboard/blog">Home</a>
        </div>
        <div className="block sm:hidden ">
          <a href="/blog/our" className="text-white">
            My blog
          </a>
        </div>
      </div>
    </nav>
  );
};
