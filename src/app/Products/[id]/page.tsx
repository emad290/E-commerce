import React from 'react'
import GetSingleProduct from '../../../../Callapi/GetSingleProduct'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import CardButton from '@/app/_components/CardBuuton/CardButton'
export default async function DaynamcId({params}:{params :{id :string}}) {
    const {id}= await params
   const {data}= await GetSingleProduct(id)
   
  return (
    <div className='contianer w-[80%] mx-auto p-6 '>
     <div className='flex justify-between items-center gap-6'>
<div >
    <Image width={600}  height={600} src={data.imageCover} alt="photo product" className='w-full h-[400px]'/>
</div>
<div>
    <h2 className='font-bold text-2xl my-3'>{data.description}</h2>
   <div className='flex justify-between items-center'>
    <div>
 <p className='text-2xl text-slate-400 my-3'>{data.title}</p>
 <h2 className='font-bold text-3xl my-3 text-emerald-700 '>{data.price} EGY</h2>
    </div>
    <div className='text-3xl text-yellow-400 flex gap-2'>
        <h1 className='text-4xl'>{data.ratingsAverage}</h1>
        <i className="fa-solid fa-star"></i>
    </div>
   </div>
<CardButton id={data.id}/>

</div>
     </div>
    </div>
  )
}
