import React from "react";

export const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="bg-green-500 p-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold">
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/login" className="text-white">
              Out blog
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
