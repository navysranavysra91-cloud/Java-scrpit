import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-bar flex items-center justify-between h-15">
      <div>
        <h2 className="text-xl text-blue-950 font-bold">My<span className="text-white font-bold">Site</span></h2>
      </div>
      <div className='flex gap-3 font-bold text-2xl'>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </div>
    </nav>
  );
};

export default Navbar;
