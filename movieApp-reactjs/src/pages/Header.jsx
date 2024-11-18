import React from "react";
import NavItems from "../components/NavItems";
import NavListItems from "../data/NavListItems";
import SearchBox from "../components/SearchBox";
import Button from "../components/Button";

function Header() {
  return (
    <header className="w-full bg-transparent px-8 py-2 flex justify-between items-center fixed top-0 left-0 z-[1100] duration-[0.6] bg-opacity-90 shadow-md text-white backdrop-blur-lg bg-black/30">
      <div className="logo">
        <h3 className="text-[35px] font-bold text-white italic uppercase">Cinema</h3>
      </div>
        <NavItems data={NavListItems} />
      <SearchBox />
      <Button text='SIGN IN' color='white' bgColor='red' className='hidden lg:flex'/>
    </header>
  );
}

export default Header;
