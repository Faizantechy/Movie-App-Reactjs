import React from 'react'

function NavItems({data}) {
  return (
          
      
      
          <ul className='flex lg:flex-row gap-10 flex-col justify-center items-center lg:h-20 lg:text-xl text-[3rem] '>

              {data.map((item) => {
                
                return <li className='duration-[0.3] uppercase font-[400] cursor-pointer active:text-red-600 hover:text-red-600'>  <a href={item.link}>{item.name}</a></li>

            })}
              
          </ul>

          
  )
}

export default NavItems