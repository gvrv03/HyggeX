import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full left-0 top-0 bg-white ">
      <div className="  container m-auto flex justify-between items-center py-5">
        <div>
          <img src="/NewLogo.svg" className="w-[191px]" alt="Logo" />
        </div>
        <div className="flex  text-[#3A3740] gap-[40px]">
          <button type="button">Home</button>
          <button type="button">FlashCard</button>
          <button type="button">Contact</button>
          <button type="button">FAQ</button>
          <button
            type="button"
            className=" text-white rounded-full bg-gradient-to-t from-[#06286E] to-[#164EC0] py-[13px] px-[40px] "
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
