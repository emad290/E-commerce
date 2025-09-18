"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useContext } from 'react'
import { Cartcontsxt } from '../Context/CartContext'
import { usePathname } from 'next/navigation'


export default function Navpar() {

const path= usePathname()

const session= useSession()
const {counter}=useContext(Cartcontsxt)
  return (
    <div className='bg-emerald-500 text-white'>
      <div className='w-[90%] mx-auto p-6 bg-red lg:flex justify-between items-center flex-wrap'>
<div>
<ul className=' w-full lg:flex gap-6 text-2xl font-semibold items-center'>
    <li className={path=="/"? "acyive": ""}><Link href={"/"} className='text-3xl font-bold'> <i className="text-amber-300 fa-solid fa-cart-shopping"></i>FreshCart</Link></li>
    <li className={path=="/"? "acyive": ""}><Link href={"/"}>Home</Link></li>
    <li className={path=="/Cart"? "acyive": ""} >
        <p className='bg-white size-6 rounded-full text-emerald-800 flex justify-center items-center'>{counter}</p>
      <Link className='' href={"/Cart"}>Cart</Link>
 
    </li>
    <li className={path=="/Products"? "acyive": ""}><Link href={"/Products"}>Products</Link></li>
    <li className={path=="/Categorey"? "acyive": ""}><Link href={"/Categorey"}>Categorey</Link></li>
    <li className={path=="/Brands"? "acyive": ""}><Link href={"/Brands"}>Brands</Link></li>
</ul>
</div>

<div>
<ul className='flex gap-3 text-2xl items-center'>
    <i className="fa-brands fa-facebook"></i>
    <i className="fa-brands fa-twitter"></i>
 <i className="fa-brands fa-square-instagram"></i>


  {session.data?  <li className='text-yellow-500 font-semibold'><Link href={"/"} onClick={()=>signOut({callbackUrl:"/Login"})}>Logout</Link></li>:
     <div className='flex items-center gap-3'> <li className='text-yellow-500 font-semibold'><Link href={"/Register"}>Register</Link></li>
    <li className='text-yellow-500 font-semibold'><Link href={"/Login"}>Login</Link></li></div>}

   
</ul>

</div>

<div>

</div>
      </div>

      
    </div>
  )
}
