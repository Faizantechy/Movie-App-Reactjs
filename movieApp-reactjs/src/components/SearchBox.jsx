import React from 'react'

function SearchBox() {
  return (
      <div className='search hidden lg:flex gap-1 items-center w-[300px] h-[40px] relative border rounded-lg'>
          
          <input type="text" placeholder='Search...' className='h-[100%] w-[100%] rounded-lg px-4 py-2 text-white bg-transparent backdrop-blur-10 outline-none border-1 border-blue-400 absolute top-0 left-5 ml-2 '/>
          <i className="ri-search-line border-r px-[10px]"></i>    </div>
  )
}

export default SearchBox