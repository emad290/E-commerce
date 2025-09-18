
import React from 'react'
import GetSingleCat from '../../../../Callapi/GetSingleCategorey'
import Image from 'next/image'


export default async function CatIdSpasfic({params}:{params :{id :string}}) {

     const {id}= await params
     const {data} = await GetSingleCat(id)
   console.log(data)
  return (
    <div className='w-1/3 mx-auto p-6 '>
 <div className='relative w-full h-[400px]'>
<Image src={data.image} alt='item' fill className='object-contain'></Image>

 </div>
 <h1 className='my-3 text-2xl text-emerald-700 font-bold text-center'>{data.name}</h1>
    </div>
  )
}
