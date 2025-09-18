"use client"

import ClearCart from '@/CarAction/ClearCart'
import Remaovecart from '@/CarAction/RemaovCart'
import ShowProducs from '@/CarAction/ShowProducts'
import UpdateQuntety from '@/CarAction/UpdateQuntity'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Cartcontsxt } from '../_components/Context/CartContext'
import { CartProduct } from '@/Types/CartAll.type'
import Link from 'next/link'


export default function Cart() {
const{counter,setcounter}=useContext(Cartcontsxt)

  const [product,setproduct]=useState([])
  const [price,setprice]=useState("")
  const [dis,setdis]=useState(false)
  const [spin,setspin]=useState(false)
  const [auntid,setauntid]=useState("")
  const [cartidnew,setcartidnew]=useState("")

async function Getproductdata(){
  const data = await ShowProducs()

  if(data.status==="success"){
    console.log(data)
    setcartidnew(data.cartId)
    setproduct(data.data.products)
    setprice(data.data.totalCartPrice)

  }
}

useEffect(()=>{
Getproductdata()
},[])

async function Delcart(id:string){
  const deldata= await Remaovecart(id)

 if(deldata.status=="success"){
     setproduct(deldata.data.products)
       setprice(deldata.data.totalCartPrice)
 
     toast.success("you delete product successfuly " ,{position:"top-center",duration:3000})
 }
}


async function Updated(id:string,count:string,sigin:string){
  setdis(true)
  setspin(true)
  setauntid(id)
  const res = await UpdateQuntety(id,count);
 
   if(res.status==="success"){

    setproduct(res.data.products)
    setprice(res.data.totalCartPrice)
toast.success("you updat count successfully" ,{position:"top-center",duration:3000})
if(sigin=="+"){
  setcounter(counter+1)
}else{
  setcounter(counter-1)
}
setdis(false)
setspin(false)
  }else{
    toast.success("you cant updat now " ,{position:"top-center",duration:3000})
    setdis(false) 
    setspin(false)
  }
}

async function deletecart(){
  const data = await ClearCart();

  if(data.message=="success"){
    Getproductdata()
    setcounter(0)
    toast.success("you delete cart successfully" ,{position:"top-center",duration:3000})
  }
}


if(product.length==0){
  return(
    <>
    <div className='flex justify-center items-center '>
      <h1 className='text-2xl text-red-700'>No product added yet !</h1>
    </div>
    </>
  )
}

  return (
   <>
   {product.length>0?
   <div className='w-2/3 mx-auto p-3 my-12'>


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<Button onClick={()=>deletecart()} className='bg-red-800 text-2xl text-white font-semibold hover:bg-red-500 cursor-pointer'>Clear Cart</Button>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">


    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          Image
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>

{product.map((item:CartProduct)=><tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
         <Image src={item.product.imageCover} width={100} height={100} alt='test'></Image>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {item.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button disabled={dis} onClick={()=>Updated(item.product.id,`${item.count -1}`,"-")} className="disabled:bg-slate-600 cursor-pointer inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div>
            {item.product.id==auntid?( spin? <i className="fa-solid fa-spinner"></i>:<p>{item.count}</p>) :<p>{item.count}</p>} 
            </div>
            <button disabled={dis} onClick={()=>Updated(item.product.id,`${item.count +1}`,"+")}  className=" disabled:bg-slate-600 cursor-pointer inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          <p>{item.price} EGY</p>
        </td>
        <td className="px-6 py-4">
          <button  onClick={()=>Delcart(item.product.id)} className="font-medium  transition-all duration-500 text-white bg-red-800 hover:bg-white hover:text-red-800 dark:text-red-500 px-6 py-3 border   cursor-pointer ">Remove</button>
        </td>
      </tr>)}

      
      <tr>
        <th scope="col" className="px-16 py-3  text-emerald-700 font-bold text-xl">
          tottal
        </th>
        <th scope="col" className="px-6 py-3">
          
        </th>
        <th scope="col" className="px-6 py-3">
          
        </th>
        <th scope="col" className="px-6 py-3 text-emerald-700 font-bold text-xl">
        {price}: EGY
        </th>
        <th scope="col" className="px-6 py-3">
         
        </th>
      </tr>
    </tbody>
  </table>
  <Button className='w-full my-3 cursor-pointer text-2xl font-bold hover:bg-slate-700 rounded-2xl'> <Link href={`/CheckOut/${cartidnew}`}>CheckOut Now</Link> </Button>
</div>




   </div>
   
   
   
   :   <div className='h-screen w-full flex justify-center items-center'>
<div className="spinner  bg-amber-300"></div>
    </div>}
   </>
  )
}
