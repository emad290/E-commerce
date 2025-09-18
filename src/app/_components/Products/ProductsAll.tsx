
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import CardButton from '../CardBuuton/CardButton'

// import { AllProductsType } from '@/Types/AllProducts.type'

export default function ProductsAll({data} ) {
 

   
  return (
 <>
 <div className='w-full md:w-1/2 lg:w-1/5 '>
<div className='p-6'>


<Card className='p-3 relative overflow-hidden group hover:shadow-xl hover:shadow-emerald-600 transition-all duration-500 '>

<div className=' absolute  transition-all duration-500 right-[-50px] z-10 group-hover:right-[0px] top-[100px]'>

<div className='flex flex-col gap-3'>
<button><i className="fa-solid fa-cart-shopping"></i></button>
<button><i className="fa-solid fa-heart"></i></button>
<button><i className="fa-solid fa-magnifying-glass-plus"></i></button>

</div>
</div>


  <Link href={`/Products/${data.id}`}>
  <CardHeader>
   
    <CardTitle>
      {/* <img src={data.imageCover} alt="" /> */}
<div className=' relative w-full h-[150px] bg-red-600'>
<Image alt='item' src={data.imageCover}  fill></Image>
</div>
      
      </CardTitle>
    <CardDescription><p className='text-emerald-600 font-semibold'>{data.category.name}</p></CardDescription>
    
  </CardHeader>
  <CardContent>
    <p className='text-yellow-500'>{data.title.split(" ").slice(0,5).join(" ")}</p>
  </CardContent>
  <CardFooter>
    <div className='flex justify-between gap-6'>
<p className='text-emerald-500'>{data.price} EGY</p>
<p className='text-emerald-500'><i className="fa-solid fa-star"></i> {data.
ratingsAverage}</p>
    </div>
  

  </CardFooter>
</Link>
<CardButton id={data.id}/>


</Card>






</div>
 </div>
 </>
  )
}
